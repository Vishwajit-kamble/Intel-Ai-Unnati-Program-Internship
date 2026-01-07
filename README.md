<<<<<<< Updated upstream
# Seva Sahayak (Seva Easy Fill)
=======
# Intel AI Unnati Program - Internship Project
>>>>>>> Stashed changes

<div align="center">

![Seva Sahayak](https://img.shields.io/badge/Seva-Sahayak-blue?style=for-the-badge)
<<<<<<< Updated upstream
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)

**AI-Powered Government Form Filling Assistant for India**

Fill government forms instantly by uploading your ID documents. Powered by OCR and AI to extract information automatically.

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)
=======
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Seva Sahayak - AI-Powered Form Filling Assistant**

*An intelligent web application that automatically fills Indian government forms using OCR and smart document extraction*

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing) • [License](#-license)
>>>>>>> Stashed changes

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
<<<<<<< Updated upstream
- [Supported Forms](#-supported-forms)
- [Supported Documents](#-supported-documents)
- [Installation](#-installation)
- [Usage](#-usage)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Privacy & Security](#-privacy--security)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Seva Sahayak** (also known as Seva Easy Fill) is a web application designed to simplify the process of filling government forms in India. Instead of manually entering information, users can upload their identity documents (Aadhaar, PAN, Voter ID, etc.), and the application uses Optical Character Recognition (OCR) technology to automatically extract and fill form fields.

### Key Benefits

- ⚡ **Fast**: Extract information in under 5 seconds
- 🎯 **Accurate**: 90%+ accuracy with smart extraction algorithms
- 🌐 **Multilingual**: Support for 10+ Indian languages
- 🔒 **Secure**: Documents are processed securely and deleted after use
- 🎤 **Voice Input**: Speak to fill form fields easily
- 📱 **Accessible**: Designed with accessibility in mind

---
=======
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Contributing](#-contributing)
- [Security & Privacy](#-security--privacy)
- [License](#-license)
- [Author](#-author)

## 🎯 Overview

**Seva Sahayak** is an AI-powered web application developed as part of the **Intel AI Unnati Program Internship**. The application simplifies the process of filling government forms in India by automatically extracting information from identity documents using advanced OCR (Optical Character Recognition) and AI technologies.

### Problem Statement

Filling government forms in India is often time-consuming and error-prone. Citizens need to manually enter information from various identity documents (Aadhaar, PAN Card, Voter ID, etc.) into multiple forms, leading to:
- Time wastage
- Human errors
- Language barriers
- Repetitive data entry

### Solution

Seva Sahayak addresses these challenges by:
- **Automated Extraction**: AI extracts data from uploaded documents in seconds
- **Multi-Language Support**: Supports 10+ Indian languages including Hindi, English, Tamil, Telugu, Bengali, and more
- **Smart Form Filling**: Automatically populates government forms with extracted data
- **Secure Processing**: Documents are processed securely and deleted after use
- **User-Friendly Interface**: Intuitive design accessible to users of all technical levels
>>>>>>> Stashed changes

## ✨ Features

### Core Features

<<<<<<< Updated upstream
- **Document Upload**: Upload multiple identity documents (Aadhaar, PAN, Voter ID, Driving License, Passport)
- **OCR Extraction**: Automatic text extraction using Tesseract.js
- **Smart Field Mapping**: Intelligent mapping of extracted data to form fields
- **Form Selection**: Choose from 8+ government form templates
- **Form Review & Edit**: Review and manually edit extracted information
- **PDF Generation**: Download filled forms as PDF documents
- **Voice Input**: Fill fields using voice commands
- **Multilingual Support**: Interface available in 10+ Indian languages:
  - English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi

### User Experience

- **Step-by-Step Wizard**: Guided 5-step process
- **Real-time Validation**: Form validation with helpful error messages
- **Confidence Indicators**: Visual indicators for extraction confidence levels
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: High contrast mode, font size controls, and keyboard navigation

---

## 📄 Supported Forms

The application supports the following government forms:

1. **Birth Certificate Application** (जन्म प्रमाण पत्र आवेदन)
2. **Driving License Application** (ड्राइविंग लाइसेंस आवेदन)
3. **PAN Card Application** (पैन कार्ड आवेदन)
4. **Caste Certificate** (जाति प्रमाण पत्र)
5. **Income Certificate** (आय प्रमाण पत्र)
6. **Ration Card Application** (राशन कार्ड आवेदन)
7. **Passport Application** (पासपोर्ट आवेदन)
8. **Voter ID Card** (मतदाता पहचान पत्र)

---

## 🆔 Supported Documents

The application can extract information from the following identity documents:

- **Aadhaar Card** - Extracts name, date of birth, gender, address, Aadhaar number
- **PAN Card** - Extracts name, father's name, date of birth, PAN number
- **Voter ID Card** - Extracts name, date of birth, address, Voter ID number
- **Driving License** - Extracts name, date of birth, address, DL number
- **Passport** - Extracts name, date of birth, address, passport number
- **Other Documents** - Generic document processing support

**Supported File Formats**: PDF, JPG, PNG (Max 10MB per file)

---

## 🚀 Installation

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **bun** package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/seva-easy-fill.git
cd seva-easy-fill
=======
- 🤖 **AI-Powered Document Extraction**
  - Automatic extraction from multiple document types:
    - Aadhaar Card
    - PAN Card
    - Voter ID
    - Driving License
    - Passport
  - Intelligent field mapping and data validation
  - Confidence scoring for extracted data (High/Medium/Low)
  - Privacy protection (Aadhaar numbers are masked)

- 📝 **Smart Form Filling**
  - Automatic form population from extracted data
  - Support for various government forms
  - Manual review and editing capabilities
  - Form validation before submission

- 🌍 **Multi-Language Support**
  - Support for 10+ Indian languages:
    - English (en)
    - Hindi (hi)
    - Tamil (ta)
    - Telugu (te)
    - Bengali (bn)
    - Marathi (mr)
    - Gujarati (gu)
    - Kannada (kn)
    - Malayalam (ml)
    - Punjabi (pa)
  - Dynamic language switching
  - Localized user interface

- 🔐 **User Authentication**
  - Secure user accounts with Supabase
  - Session management
  - Protected routes
  - User data persistence

- 📄 **PDF Generation**
  - Generate filled forms as PDF
  - Download and share capabilities
  - Professional form formatting

- 🎨 **Modern UI/UX**
  - Beautiful, intuitive interface built with shadcn/ui
  - Responsive design for all screen sizes (Desktop, Tablet, Mobile)
  - Dark mode support
  - Smooth animations and transitions
  - Accessible components (ARIA compliant)

- ⚡ **Performance**
  - Fast processing (under 5 seconds)
  - 90%+ accuracy rate
  - Optimized bundle size
  - Lazy loading components

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) or **bun** (recommended for faster installs)
- **Git** - [Download](https://git-scm.com/)

### Recommended: Node Version Manager (nvm)

For easier Node.js version management, we recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating):

**Linux/Mac:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

**Windows:**
Download from: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone <YOUR_GIT_URL>
cd seva-easy-fill-main
>>>>>>> Stashed changes
```

### Step 2: Install Dependencies

<<<<<<< Updated upstream
Using npm:
=======
**Using npm:**
>>>>>>> Stashed changes
```bash
npm install
```

<<<<<<< Updated upstream
Using bun:
=======
**Using bun (recommended - faster):**
>>>>>>> Stashed changes
```bash
bun install
```

<<<<<<< Updated upstream
### Step 3: Start Development Server
=======
### Step 3: Environment Configuration

Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

# AI Service (for Supabase Edge Function)
LOVABLE_API_KEY=your_lovable_api_key
```

**Note**: 
- For local Supabase development, you can use the Supabase CLI to start a local instance
- The configuration is already set up in `supabase/config.toml`
- Never commit `.env` files to version control

### Step 4: Start Development Server
>>>>>>> Stashed changes

```bash
npm run dev
```

<<<<<<< Updated upstream
The application will be available at `http://localhost:8080`

---

## 💻 Usage

### For End Users

1. **Start**: Click "Start Form Filling" on the landing page
2. **Consent**: Read and agree to the privacy consent dialog
3. **Upload Documents**: Upload your identity documents (Aadhaar, PAN, etc.)
4. **Review Extraction**: Review the automatically extracted information
5. **Select Form**: Choose the government form you want to fill
6. **Review & Edit**: Verify all information and make any necessary edits
7. **Download**: Download your completed form as a PDF

### For Developers

#### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

#### Environment Variables

Currently, no environment variables are required. All processing happens client-side.

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 5.4** - Build tool and dev server

### UI Components & Styling
- **shadcn/ui** - Component library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **tailwindcss-animate** - Animation utilities

### Form Management
- **React Hook Form 7.6** - Form state management
- **Zod 3.25** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### OCR & Document Processing
- **Tesseract.js 5.0** - OCR engine for text extraction

### Routing & State Management
- **React Router DOM 6.30** - Client-side routing
- **TanStack Query 5.83** - Server state management
- **React Context API** - Global state management

### Additional Libraries
- **date-fns 3.6** - Date manipulation
- **sonner 1.7** - Toast notifications
- **next-themes 0.3** - Theme management

### Development Tools
- **ESLint 9.32** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---
=======
The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## ⚙️ Configuration

### Supabase Setup

1. **Create a Supabase Project**
   - Visit [supabase.com](https://supabase.com)
   - Create a new project
   - Copy your project URL and anon key from Project Settings → API

2. **Local Development (Optional)**
   ```bash
   # Install Supabase CLI
   npm install -g supabase
   
   # Start local Supabase
   supabase start
   ```

3. **Configure Edge Functions**
   - The `extract-document` function requires `LOVABLE_API_KEY`
   - Set this in your Supabase project's environment variables:
     - Go to Project Settings → Edge Functions → Secrets
     - Add `LOVABLE_API_KEY` with your API key value

### Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes | `https://xxxxx.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon/public key | Yes | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `LOVABLE_API_KEY` | API key for AI document extraction | Yes | `sk-xxxxx...` |

## 💻 Usage

### Basic Workflow

1. **Sign Up / Login**
   - Create an account or sign in to your existing account
   - Your session will be securely managed

2. **Select Form Type**
   - Choose the government form you need to fill
   - Browse available form templates

3. **Upload Document**
   - Upload a clear image or scan of your ID document
   - **Supported formats**: JPG, PNG, PDF
   - **Supported documents**: 
     - Aadhaar Card
     - PAN Card
     - Voter ID
     - Driving License
     - Passport
   - **File size limit**: Max 10MB per file

4. **Review Extraction**
   - Review the extracted information
   - Check confidence levels:
     - **High**: Data is clearly visible and accurate
     - **Medium**: Data is readable but may need verification
     - **Low**: Data is unclear - please verify manually
   - Edit any fields if needed

5. **Fill Form**
   - The form will be automatically populated with extracted data
   - Review all fields and make final adjustments
   - Verify all information is correct

6. **Download**
   - Generate the filled form as PDF
   - Download and save to your device
   - Share or print as needed

### Document Upload Tips

- 📸 **Use clear, well-lit images** - Better lighting improves extraction accuracy
- 📄 **Ensure the document is fully visible** - Crop unnecessary background
- 🔍 **Higher resolution images** - Yield better extraction results (minimum 300 DPI recommended)
- ✂️ **Straight, aligned documents** - Avoid skewed or rotated images
- 🚫 **Avoid shadows and glare** - Ensure even lighting across the document

### Supported Document Types

| Document | Supported Fields | Notes |
|----------|-----------------|-------|
| Aadhaar Card | Name, DOB, Gender, Address, Aadhaar Number (masked) | Last 4 digits only shown |
| PAN Card | Name, DOB, Father's Name, PAN Number | Full PAN visible |
| Voter ID | Name, DOB, Address, Voter ID Number | Complete address extraction |
| Driving License | Name, DOB, Address, License Number | Vehicle class information |
| Passport | Name, DOB, Passport Number, Address | International format support |
>>>>>>> Stashed changes

## 📁 Project Structure

```
<<<<<<< Updated upstream
seva-easy-fill/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── ConsentDialog.tsx
│   │   ├── DocumentUpload.tsx
│   │   ├── DownloadPage.tsx
│   │   ├── ExtractionResults.tsx
│   │   ├── FormReview.tsx
│   │   ├── FormSelection.tsx
│   │   ├── FormWizard.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LanguageSelector.tsx
│   │   └── StepIndicator.tsx
│   ├── contexts/           # React contexts
│   │   ├── FormContext.tsx
│   │   └── LanguageContext.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                # Utility libraries
│   │   ├── documentExtractor.ts  # OCR extraction logic
│   │   ├── i18n.ts         # Internationalization
│   │   └── utils.ts        # Helper functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx             # Main app component
│   ├── App.css             # App styles
│   ├── main.tsx             # Entry point
│   └── index.css           # Global styles
├── .gitignore
├── components.json          # shadcn/ui config
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # App-specific TS config
├── tsconfig.node.json      # Node-specific TS config
└── vite.config.ts          # Vite configuration
```

---

## 🔧 Development

### Code Style

The project uses ESLint for code quality. Run the linter:

```bash
npm run lint
```

### Adding New Forms

To add a new form template:

1. Update `src/components/FormSelection.tsx` - Add form template to `formTemplates` array
2. Update `src/lib/i18n.ts` - Add translations for form name
3. Update form field mappings in `src/lib/documentExtractor.ts` if needed

### Adding New Languages

To add support for a new language:

1. Update `src/lib/i18n.ts`:
   - Add language code to `Language` type
   - Add language entry to `languages` array
   - Add translations object to `translations` record

### OCR Customization

OCR extraction logic is in `src/lib/documentExtractor.ts`. You can customize:

- Character whitelist for better accuracy
- Page segmentation modes
- Field extraction patterns
- Confidence thresholds

---

## 🏗️ Building for Production
=======
seva-easy-fill-main/
├── public/                      # Static assets (images, icons, etc.)
├── src/
│   ├── components/             # React components
│   │   ├── ui/                # shadcn/ui components (reusable UI primitives)
│   │   ├── DocumentUpload.tsx  # Document upload interface
│   │   ├── ExtractionResults.tsx # Display extracted data
│   │   ├── FormWizard.tsx     # Multi-step form wizard
│   │   ├── FormSelection.tsx  # Form type selection
│   │   ├── FormReview.tsx     # Review and edit form
│   │   ├── DownloadPage.tsx  # PDF download page
│   │   ├── LandingPage.tsx   # Home/landing page
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   ├── LanguageSelector.tsx # Language switcher
│   │   └── StepIndicator.tsx  # Progress indicator
│   ├── contexts/              # React contexts (state management)
│   │   ├── FormContext.tsx   # Form state management
│   │   └── LanguageContext.tsx # Language/i18n state
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.tsx        # Authentication hook
│   │   ├── use-mobile.tsx     # Mobile detection
│   │   └── use-toast.ts       # Toast notifications
│   ├── integrations/          # Third-party integrations
│   │   └── supabase/         # Supabase client and types
│   │       ├── client.ts     # Supabase client setup
│   │       └── types.ts      # TypeScript types
│   ├── lib/                  # Utility functions
│   │   ├── i18n.ts          # Internationalization setup
│   │   ├── pdfGenerator.ts  # PDF generation utilities
│   │   └── utils.ts         # General utilities
│   ├── pages/               # Page components
│   │   ├── Auth.tsx         # Authentication page
│   │   ├── Index.tsx        # Main page router
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── supabase/                # Supabase configuration
│   ├── functions/          # Edge functions
│   │   └── extract-document/ # AI document extraction function
│   └── config.toml         # Supabase local config
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── components.json         # shadcn/ui configuration
├── eslint.config.js        # ESLint configuration
└── README.md              # This file
```

## 🛠 Tech Stack

### Frontend Framework & Libraries

- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Next-generation build tool and dev server
- **React Router 6.30.1** - Client-side routing
- **React Hook Form 7.61.1** - Performant form management
- **Zod 3.25.76** - Schema validation

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark mode support
- **tailwindcss-animate** - Animation utilities

### Backend & Database

- **Supabase** - Backend as a Service
  - **Authentication** - User management and sessions
  - **PostgreSQL Database** - Data storage
  - **Edge Functions** - Serverless functions for AI processing
  - **Storage** - File storage (if needed)

### Data Fetching & State

- **@tanstack/react-query 5.83.0** - Powerful data synchronization
- **React Context API** - Global state management

### Additional Libraries

- **pdf-lib 1.17.1** - PDF generation and manipulation
- **date-fns 3.6.0** - Date utility functions
- **recharts 2.15.4** - Composable charting library
- **sonner 1.7.4** - Beautiful toast notifications
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production (optimized)
npm run build

# Build for development mode
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

### Development Workflow

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Make changes** - The app will hot-reload automatically

3. **Check for errors:**
   ```bash
   npm run lint
   ```

4. **Test the build:**
   ```bash
   npm run build
   npm run preview
   ```

### Code Style Guidelines

- **TypeScript**: Use strict type checking, avoid `any` types
- **Components**: Use functional components with hooks
- **Naming**: Use PascalCase for components, camelCase for functions/variables
- **Imports**: Use absolute imports with `@/` alias
- **Accessibility**: Include ARIA labels, keyboard navigation support
- **Error Handling**: Implement proper error boundaries and user feedback

### Adding New Features

1. Create feature branch: `git checkout -b feature/your-feature`
2. Implement changes following code style
3. Test thoroughly
4. Update documentation if needed
5. Submit pull request

## 🏗 Building for Production
>>>>>>> Stashed changes

### Build Command

```bash
npm run build
```

<<<<<<< Updated upstream
This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment

The built files in `dist/` can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions to deploy
- **AWS S3 + CloudFront**: Upload to S3 bucket
- **Any static hosting**: Upload `dist/` contents

---

## 🔒 Privacy & Security

### Data Handling

- **Client-Side Processing**: All OCR processing happens in the browser
- **No Server Upload**: Documents are never sent to external servers
- **Automatic Cleanup**: Documents are deleted from memory after processing
- **No Data Storage**: No personal information is stored or logged

### Privacy Features

- Privacy consent dialog before document upload
- Clear information about data processing
- No tracking or analytics by default
- Open source code for transparency

### Security Best Practices

- Input validation on all form fields
- File type and size restrictions
- XSS protection through React's built-in escaping
- HTTPS recommended for production deployment

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Run tests and linting** (`npm run lint`)
5. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly
- Ensure accessibility standards are met

---

## 📝 License

This project is open source. Please check the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Tesseract.js** - For OCR capabilities
- **shadcn/ui** - For beautiful, accessible components
- **Indian Government** - For form templates and requirements
- **Open Source Community** - For amazing tools and libraries

---

## 📞 Support

For issues, questions, or contributions:

- **GitHub Issues**: [Open an issue](https://github.com/your-username/seva-easy-fill/issues)
- **Documentation**: Check the code comments and this README
- **Community**: Join discussions in GitHub Discussions

---

## 🗺️ Roadmap

Future enhancements planned:

- [ ] Support for more government forms
- [ ] Enhanced OCR accuracy with ML models
- [ ] Offline mode support
- [ ] Mobile app version
- [ ] Integration with government portals
- [ ] Batch processing for multiple forms
- [ ] Digital signature support
- [ ] Form submission tracking
=======
This creates an optimized production build in the `dist/` directory with:
- Minified JavaScript and CSS
- Tree-shaking (removes unused code)
- Code splitting for optimal loading
- Asset optimization

### Deployment Options

The built files can be deployed to various platforms:

**Recommended Platforms:**
- **Vercel** - Zero-config deployment, perfect for Vite projects
- **Netlify** - Easy deployment with continuous integration
- **Cloudflare Pages** - Fast global CDN
- **AWS S3 + CloudFront** - Scalable cloud hosting
- **GitHub Pages** - Free static hosting

### Environment Variables in Production

Set these in your hosting platform's environment variables:

```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_production_supabase_key
```

**Important**: Never expose sensitive keys in client-side code. Only use publishable keys.

## 🤝 Contributing

Contributions are welcome! This project is part of the Intel AI Unnati Program Internship, and we encourage collaboration.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone <your-fork-url>
   cd seva-easy-fill-main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m 'Add: amazing feature description'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots if UI changes

### Contribution Guidelines

- ✅ Write clear, descriptive commit messages
- ✅ Update README.md if adding features
- ✅ Ensure all tests pass (if applicable)
- ✅ Follow TypeScript best practices
- ✅ Add proper error handling
- ✅ Make components accessible
- ❌ Don't commit `.env` files
- ❌ Don't break existing functionality

## 🔒 Security & Privacy

### Data Privacy

- **Secure Processing**: Documents are processed securely using encrypted connections
- **Privacy Protection**: Aadhaar numbers are masked (only last 4 digits shown)
- **Data Deletion**: Documents are deleted after processing (configurable retention)
- **No Permanent Storage**: User data is not stored permanently without explicit consent
- **Encrypted Communications**: All API communications use HTTPS/TLS

### Security Best Practices

- ✅ Never commit `.env` files or API keys
- ✅ Use environment variables for sensitive data
- ✅ Regularly update dependencies for security patches
- ✅ Implement proper authentication and authorization
- ✅ Validate and sanitize all user inputs
- ✅ Follow OWASP security guidelines
- ✅ Use secure session management

### Reporting Security Issues

If you discover a security vulnerability, please email directly instead of using the issue tracker. We take security seriously and will address issues promptly.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Vishwajit Kamble

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Vishwajit Kamble**

- **Project**: Intel AI Unnati Program - Internship Project
- **Application**: Seva Sahayak - AI-Powered Form Filling Assistant
- **Year**: 2026

### Acknowledgments

- **Intel AI Unnati Program** - For providing the internship opportunity
- **Supabase** - For the excellent backend infrastructure
- **shadcn/ui** - For the beautiful component library
- **Open Source Community** - For the amazing tools and libraries
>>>>>>> Stashed changes

---

<div align="center">

<<<<<<< Updated upstream
**Made with ❤️ for Seva Kendras across India**

[⭐ Star this repo](https://github.com/your-username/seva-easy-fill) if you find it helpful!
=======
**Made with ❤️ for simplifying government services in India**

⭐ **Star this repo if you find it helpful!**

**Part of the Intel AI Unnati Program Internship**
>>>>>>> Stashed changes

</div>
