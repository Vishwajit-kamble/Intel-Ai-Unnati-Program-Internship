import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont } from 'pdf-lib';
import { ExtractedField, FormTemplate } from '@/contexts/FormContext';

interface FormFieldConfig {
  label: string;
  x: number;
  y: number;
  width?: number;
  fieldKey: string;
}

interface FormLayoutConfig {
  title: string;
  subtitle: string;
  headerColor: [number, number, number];
  fields: FormFieldConfig[];
  instructions?: string[];
}

const formLayouts: Record<string, FormLayoutConfig> = {
  birth_certificate: {
    title: 'BIRTH CERTIFICATE APPLICATION',
    subtitle: 'Municipal Corporation / Gram Panchayat',
    headerColor: [0.12, 0.47, 0.71],
    fields: [
      { label: 'Full Name of Child', fieldKey: 'fullName', x: 50, y: 600, width: 250 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 350, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 200 },
      { label: "Mother's Name", fieldKey: 'motherName', x: 50, y: 480, width: 200 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 420, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 360, width: 100 },
    ],
    instructions: [
      '1. Submit original documents for verification',
      '2. Attach proof of birth (hospital certificate)',
      '3. Processing time: 7-15 working days',
    ],
  },
  driving_license: {
    title: 'DRIVING LICENSE APPLICATION',
    subtitle: 'Regional Transport Office (RTO)',
    headerColor: [0.13, 0.55, 0.13],
    fields: [
      { label: 'Full Name', fieldKey: 'fullName', x: 50, y: 600, width: 250 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 350, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's/Spouse Name", fieldKey: 'fatherName', x: 200, y: 540, width: 250 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'Aadhaar Number', fieldKey: 'aadhaarNumber', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. Valid for Learner License / Permanent License',
      '2. Attach address proof and age proof',
      '3. Medical certificate required for permanent license',
    ],
  },
  pan_application: {
    title: 'PAN CARD APPLICATION - FORM 49A',
    subtitle: 'Income Tax Department, Government of India',
    headerColor: [0.0, 0.0, 0.5],
    fields: [
      { label: 'Full Name', fieldKey: 'fullName', x: 50, y: 600, width: 300 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 400, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 250 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'Aadhaar Number', fieldKey: 'aadhaarNumber', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. PAN is a 10-character alphanumeric identifier',
      '2. Attach proof of identity and address',
      '3. Two recent passport-size photographs required',
    ],
  },
  caste_certificate: {
    title: 'CASTE/COMMUNITY CERTIFICATE',
    subtitle: 'Revenue Department',
    headerColor: [0.55, 0.27, 0.07],
    fields: [
      { label: 'Full Name', fieldKey: 'fullName', x: 50, y: 600, width: 250 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 350, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 250 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'State', fieldKey: 'state', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. Proof of caste from Gram Panchayat/Municipality',
      '2. School leaving certificate may be required',
      '3. Processing time: 15-30 working days',
    ],
  },
  income_certificate: {
    title: 'INCOME CERTIFICATE APPLICATION',
    subtitle: 'Revenue Department / Tehsildar Office',
    headerColor: [0.6, 0.4, 0.2],
    fields: [
      { label: 'Full Name', fieldKey: 'fullName', x: 50, y: 600, width: 250 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 350, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 250 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'State', fieldKey: 'state', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. Self-declaration of annual income required',
      '2. Salary slips/income proof for employed persons',
      '3. Valid for one financial year',
    ],
  },
  ration_card: {
    title: 'RATION CARD APPLICATION',
    subtitle: 'Department of Food & Civil Supplies',
    headerColor: [0.8, 0.4, 0.0],
    fields: [
      { label: 'Head of Family Name', fieldKey: 'fullName', x: 50, y: 600, width: 250 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 350, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's/Husband's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 250 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'Aadhaar Number', fieldKey: 'aadhaarNumber', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. All family member details required',
      '2. Income proof for BPL/AAY category',
      '3. Gas connection surrender proof if applicable',
    ],
  },
  passport: {
    title: 'PASSPORT APPLICATION',
    subtitle: 'Ministry of External Affairs, Government of India',
    headerColor: [0.0, 0.2, 0.4],
    fields: [
      { label: 'Full Name (as in documents)', fieldKey: 'fullName', x: 50, y: 600, width: 300 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 400, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 180 },
      { label: "Mother's Name", fieldKey: 'motherName', x: 430, y: 540, width: 180 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'Aadhaar Number', fieldKey: 'aadhaarNumber', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. Apply online at passportindia.gov.in',
      '2. Book appointment at Passport Seva Kendra',
      '3. Original documents required for verification',
    ],
  },
  voter_id: {
    title: 'VOTER ID CARD APPLICATION - FORM 6',
    subtitle: 'Election Commission of India',
    headerColor: [0.5, 0.0, 0.5],
    fields: [
      { label: 'Full Name', fieldKey: 'fullName', x: 50, y: 600, width: 250 },
      { label: 'Date of Birth', fieldKey: 'dateOfBirth', x: 350, y: 600, width: 150 },
      { label: 'Gender', fieldKey: 'gender', x: 50, y: 540, width: 100 },
      { label: "Father's/Mother's/Husband's Name", fieldKey: 'fatherName', x: 200, y: 540, width: 300 },
      { label: 'Address', fieldKey: 'address', x: 50, y: 480, width: 400 },
      { label: 'PIN Code', fieldKey: 'pincode', x: 50, y: 420, width: 100 },
      { label: 'Aadhaar Number (Optional)', fieldKey: 'aadhaarNumber', x: 200, y: 420, width: 200 },
    ],
    instructions: [
      '1. Must be 18 years or above on qualifying date',
      '2. Proof of residence required',
      '3. Recent passport-size photograph required',
    ],
  },
};

function drawRoundedRect(
  page: PDFPage,
  x: number,
  y: number,
  width: number,
  height: number,
  color: [number, number, number]
) {
  page.drawRectangle({
    x,
    y,
    width,
    height,
    color: rgb(color[0], color[1], color[2]),
  });
}

function wrapText(text: string, maxWidth: number, font: PDFFont, fontSize: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);
    
    if (width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines;
}

export async function generatePDF(
  formTemplate: FormTemplate,
  extractedFields: ExtractedField[]
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size
  
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  const layout = formLayouts[formTemplate.id] || formLayouts.birth_certificate;
  const fieldMap = new Map(extractedFields.map(f => [f.key, f.value]));
  
  // Draw header background
  drawRoundedRect(page, 0, 770, 595, 72, layout.headerColor);
  
  // Draw Government emblem placeholder (circle with text)
  page.drawCircle({
    x: 60,
    y: 806,
    size: 25,
    color: rgb(1, 1, 1),
    opacity: 0.9,
  });
  page.drawText('GOI', {
    x: 47,
    y: 800,
    size: 14,
    font: helveticaBold,
    color: rgb(layout.headerColor[0], layout.headerColor[1], layout.headerColor[2]),
  });
  
  // Title
  page.drawText(layout.title, {
    x: 100,
    y: 815,
    size: 16,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });
  
  // Subtitle
  page.drawText(layout.subtitle, {
    x: 100,
    y: 793,
    size: 11,
    font: helvetica,
    color: rgb(1, 1, 1),
  });
  
  // Application reference
  const refNo = `REF: SS-${Date.now().toString(36).toUpperCase()}`;
  page.drawText(refNo, {
    x: 430,
    y: 800,
    size: 10,
    font: helvetica,
    color: rgb(1, 1, 1),
  });
  
  // Date
  const dateStr = `Date: ${new Date().toLocaleDateString('en-IN')}`;
  page.drawText(dateStr, {
    x: 430,
    y: 785,
    size: 10,
    font: helvetica,
    color: rgb(1, 1, 1),
  });
  
  // Form fields section
  page.drawText('APPLICANT DETAILS', {
    x: 50,
    y: 740,
    size: 12,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  });
  
  // Draw underline
  page.drawLine({
    start: { x: 50, y: 735 },
    end: { x: 200, y: 735 },
    thickness: 1,
    color: rgb(layout.headerColor[0], layout.headerColor[1], layout.headerColor[2]),
  });
  
  // Draw form fields
  let currentY = 690;
  const leftMargin = 50;
  const labelColor = rgb(0.4, 0.4, 0.4);
  const valueColor = rgb(0.1, 0.1, 0.1);
  const boxHeight = 55;
  
  // Group fields into rows (2 per row for most)
  const fieldsPerRow = 2;
  
  for (let i = 0; i < layout.fields.length; i += fieldsPerRow) {
    const rowFields = layout.fields.slice(i, i + fieldsPerRow);
    const fieldWidth = (495 / rowFields.length) - 10;
    
    rowFields.forEach((field, idx) => {
      const fieldX = leftMargin + (idx * (fieldWidth + 20));
      const value = fieldMap.get(field.fieldKey) || '';
      
      // Draw field box
      page.drawRectangle({
        x: fieldX,
        y: currentY - 25,
        width: fieldWidth,
        height: boxHeight,
        borderColor: rgb(0.8, 0.8, 0.8),
        borderWidth: 1,
        color: rgb(0.98, 0.98, 0.98),
      });
      
      // Draw label
      page.drawText(field.label, {
        x: fieldX + 8,
        y: currentY + 18,
        size: 9,
        font: helvetica,
        color: labelColor,
      });
      
      // Draw value with word wrap
      const valueLines = wrapText(value, fieldWidth - 16, helveticaBold, 11);
      valueLines.slice(0, 2).forEach((line, lineIdx) => {
        page.drawText(line, {
          x: fieldX + 8,
          y: currentY - 2 - (lineIdx * 14),
          size: 11,
          font: helveticaBold,
          color: valueColor,
        });
      });
    });
    
    currentY -= boxHeight + 15;
  }
  
  // Photo placeholder
  const photoX = 480;
  const photoY = currentY + 120;
  page.drawRectangle({
    x: photoX,
    y: photoY,
    width: 70,
    height: 85,
    borderColor: rgb(0.6, 0.6, 0.6),
    borderWidth: 1,
    color: rgb(0.95, 0.95, 0.95),
  });
  page.drawText('PHOTO', {
    x: photoX + 18,
    y: photoY + 40,
    size: 10,
    font: helvetica,
    color: rgb(0.6, 0.6, 0.6),
  });
  
  // Instructions section
  if (layout.instructions && layout.instructions.length > 0) {
    currentY -= 30;
    
    page.drawText('INSTRUCTIONS', {
      x: leftMargin,
      y: currentY,
      size: 12,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
    
    page.drawLine({
      start: { x: leftMargin, y: currentY - 5 },
      end: { x: 150, y: currentY - 5 },
      thickness: 1,
      color: rgb(layout.headerColor[0], layout.headerColor[1], layout.headerColor[2]),
    });
    
    currentY -= 25;
    
    layout.instructions.forEach((instruction, idx) => {
      page.drawText(instruction, {
        x: leftMargin + 10,
        y: currentY - (idx * 18),
        size: 10,
        font: helvetica,
        color: rgb(0.3, 0.3, 0.3),
      });
    });
  }
  
  // Declaration section
  currentY -= 100;
  
  page.drawText('DECLARATION', {
    x: leftMargin,
    y: currentY,
    size: 12,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  });
  
  page.drawLine({
    start: { x: leftMargin, y: currentY - 5 },
    end: { x: 140, y: currentY - 5 },
    thickness: 1,
    color: rgb(layout.headerColor[0], layout.headerColor[1], layout.headerColor[2]),
  });
  
  const declaration = 'I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I understand that any false statement may result in rejection of my application or legal action.';
  const declarationLines = wrapText(declaration, 450, helvetica, 10);
  
  declarationLines.forEach((line, idx) => {
    page.drawText(line, {
      x: leftMargin + 10,
      y: currentY - 20 - (idx * 14),
      size: 10,
      font: helvetica,
      color: rgb(0.3, 0.3, 0.3),
    });
  });
  
  // Signature section
  currentY -= 80;
  
  // Signature box
  page.drawRectangle({
    x: 350,
    y: currentY - 30,
    width: 180,
    height: 50,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 1,
  });
  
  page.drawText('Signature of Applicant', {
    x: 380,
    y: currentY - 45,
    size: 10,
    font: helvetica,
    color: rgb(0.5, 0.5, 0.5),
  });
  
  page.drawText('Date: _______________', {
    x: leftMargin,
    y: currentY - 35,
    size: 10,
    font: helvetica,
    color: rgb(0.3, 0.3, 0.3),
  });
  
  page.drawText('Place: _______________', {
    x: leftMargin,
    y: currentY - 55,
    size: 10,
    font: helvetica,
    color: rgb(0.3, 0.3, 0.3),
  });
  
  // Footer
  page.drawLine({
    start: { x: 50, y: 50 },
    end: { x: 545, y: 50 },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  
  page.drawText('Generated by Seva Sahayak | For official use, please verify with original documents', {
    x: 120,
    y: 35,
    size: 8,
    font: helvetica,
    color: rgb(0.6, 0.6, 0.6),
  });
  
  return await pdfDoc.save();
}

export function downloadPDF(pdfBytes: Uint8Array, filename: string) {
  const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
