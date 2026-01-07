import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ExtractedField {
  key: string;
  value: string;
  confidence: 'high' | 'medium' | 'low';
  source?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64, documentType, mimeType } = await req.json();

    if (!imageBase64) {
      console.error('No image data provided');
      return new Response(
        JSON.stringify({ success: false, error: 'No image data provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Processing ${documentType} document, mime: ${mimeType}`);

    const systemPrompt = `You are an expert OCR and document analysis AI specialized in Indian identity documents. 
Your task is to extract information from Indian government documents like Aadhaar, PAN Card, Voter ID, Driving License, and Passport.

IMPORTANT RULES:
1. Extract ALL visible text fields accurately
2. For Aadhaar numbers, MASK them: show only last 4 digits as "XXXX XXXX 1234"
3. For PAN numbers, keep them visible as they are less sensitive
4. Assign confidence levels based on text clarity:
   - "high": Text is clearly visible and unambiguous
   - "medium": Text is readable but may have minor issues
   - "low": Text is unclear, partially visible, or you're guessing
5. If a field is not found, set value to empty string and confidence to "low"

You MUST respond with a valid JSON object using this exact structure:
{
  "fields": [
    {"key": "fullName", "value": "extracted name", "confidence": "high", "source": "document type"},
    {"key": "dateOfBirth", "value": "DD-MM-YYYY", "confidence": "high", "source": "document type"},
    {"key": "gender", "value": "Male/Female", "confidence": "high", "source": "document type"},
    {"key": "fatherName", "value": "father name", "confidence": "medium", "source": "document type"},
    {"key": "motherName", "value": "mother name", "confidence": "medium", "source": "document type"},
    {"key": "spouseName", "value": "spouse name", "confidence": "medium", "source": "document type"},
    {"key": "address", "value": "full address", "confidence": "high", "source": "document type"},
    {"key": "pincode", "value": "6 digit pincode", "confidence": "high", "source": "document type"},
    {"key": "state", "value": "state name", "confidence": "high", "source": "document type"},
    {"key": "district", "value": "district name", "confidence": "medium", "source": "document type"},
    {"key": "aadhaarNumber", "value": "XXXX XXXX 1234 (masked)", "confidence": "high", "source": "Aadhaar"},
    {"key": "panNumber", "value": "ABCDE1234F", "confidence": "high", "source": "PAN Card"},
    {"key": "voterIdNumber", "value": "voter id", "confidence": "high", "source": "Voter ID"},
    {"key": "dlNumber", "value": "license number", "confidence": "high", "source": "Driving License"},
    {"key": "passportNumber", "value": "passport number", "confidence": "high", "source": "Passport"},
    {"key": "mobileNumber", "value": "phone number", "confidence": "low", "source": "document type"}
  ]
}

Only include fields that are present or partially visible in the document. Do not include fields that have no data at all.`;

    const userPrompt = `Please analyze this ${documentType || 'identity'} document and extract all personal information visible in it. Return the results as a JSON object.`;

    console.log('Calling Lovable AI for document extraction...');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: [
              { type: 'text', text: userPrompt },
              { 
                type: 'image_url', 
                image_url: { 
                  url: `data:${mimeType || 'image/jpeg'};base64,${imageBase64}` 
                }
              }
            ]
          }
        ],
        max_tokens: 2000,
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ success: false, error: 'AI credits exhausted. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ success: false, error: 'Failed to process document with AI' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiResponse = await response.json();
    console.log('AI response received');

    const content = aiResponse.choices?.[0]?.message?.content;
    if (!content) {
      console.error('No content in AI response');
      return new Response(
        JSON.stringify({ success: false, error: 'No extraction results from AI' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse the JSON from the AI response
    let extractedData: { fields: ExtractedField[] };
    try {
      // Try to extract JSON from the response (it might be wrapped in markdown code blocks)
      let jsonString = content;
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        jsonString = jsonMatch[1].trim();
      }
      
      extractedData = JSON.parse(jsonString);
      console.log(`Extracted ${extractedData.fields?.length || 0} fields`);
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError, content);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to parse extraction results' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, fields: extractedData.fields || [] }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Extract document error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
