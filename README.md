# Seva Sahayak - AI-Powered Form Filling Assistant

<div align="center">

![Seva Sahayak](https://img.shields.io/badge/Seva-Sahayak-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**An intelligent application that simplifies government form filling using AI-powered document extraction**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Contributing](#-contributing)
- [Security](#-security)
- [License](#-license)
- [Support](#-support)

## 🎯 Overview

Seva Sahayak is an AI-powered web application designed to streamline the process of filling government forms in India. By leveraging advanced OCR and AI technologies, users can simply upload their identity documents (Aadhaar, PAN Card, Voter ID, Driving License, or Passport), and the system automatically extracts relevant information to populate government forms accurately.

### Key Benefits

- ⚡ **Time-Saving**: Reduces form filling time from minutes to seconds
- 🎯 **Accuracy**: AI-powered extraction minimizes human errors
- 🌐 **Multi-Language**: Supports English, Hindi, and other Indian languages
- 🔒 **Secure**: Secure document processing with privacy protection
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## ✨ Features

### Core Features

- 🤖 **AI-Powered Document Extraction**
  - Automatic extraction from Aadhaar, PAN, Voter ID, Driving License, and Passport
  - Intelligent field mapping and data validation
  - Confidence scoring for extracted data

- 📝 **Smart Form Filling**
  - Automatic form population from extracted data
  - Support for various government forms
  - Manual review and editing capabilities

- 🌍 **Multi-Language Support**
  - English, Hindi, and other Indian languages
  - Dynamic language switching
  - Localized user interface

- 🔐 **User Authentication**
  - Secure user accounts with Supabase
  - Session management
  - Protected routes

- 📄 **PDF Generation**
  - Generate filled forms as PDF
  - Download and share capabilities
  - Form validation before download

- 🎨 **Modern UI/UX**
  - Beautiful, intuitive interface built with shadcn/ui
  - Responsive design for all screen sizes
  - Dark mode support
  - Smooth animations and transitions

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) or **bun** (recommended)
- **Git** - [Download](https://git-scm.com/)

### Recommended: Node Version Manager (nvm)

For easier Node.js version management, we recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating):

```bash
# Install nvm (Linux/Mac)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install nvm (Windows)
# Download from: https://github.com/coreybutler/nvm-windows/releases
```

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone <YOUR_GIT_URL>
cd seva-easy-fill-main
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using bun (faster):
```bash
bun install
```

### Step 3: Environment Configuration

Create a `.env` file in the root directory:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

# AI Service (for Supabase Edge Function)
LOVABLE_API_KEY=your_lovable_api_key
```

**Note**: For local Supabase development, you can use the Supabase CLI to start a local instance. The configuration is already set up in `supabase/config.toml`.

### Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## ⚙️ Configuration

### Supabase Setup

1. **Create a Supabase Project**
   - Visit [supabase.com](https://supabase.com)
   - Create a new project
   - Copy your project URL and anon key

2. **Local Development (Optional)**
   ```bash
   # Install Supabase CLI
   npm install -g supabase
   
   # Start local Supabase
   supabase start
   ```

3. **Configure Edge Functions**
   - The `extract-document` function requires `LOVABLE_API_KEY`
   - Set this in your Supabase project's environment variables or `.env.local`

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon/public key | Yes |
| `LOVABLE_API_KEY` | API key for AI document extraction | Yes (for Edge Function) |

## 💻 Usage

### Basic Workflow

1. **Sign Up / Login**
   - Create an account or sign in to your existing account

2. **Select Form Type**
   - Choose the government form you need to fill

3. **Upload Document**
   - Upload a clear image or scan of your ID document
   - Supported formats: JPG, PNG, PDF
   - Supported documents: Aadhaar, PAN, Voter ID, Driving License, Passport

4. **Review Extraction**
   - Review the extracted information
   - Edit any fields if needed
   - Check confidence levels

5. **Fill Form**
   - The form will be automatically populated
   - Review and make final adjustments

6. **Download**
   - Generate and download the filled form as PDF
   - Save or share as needed

### Document Upload Tips

- 📸 Use clear, well-lit images
- 📄 Ensure the document is fully visible
- 🔍 Higher resolution images yield better extraction results
- ✂️ Crop unnecessary background for better accuracy

## 📁 Project Structure

```
seva-easy-fill-main/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── DocumentUpload.tsx
│   │   ├── FormWizard.tsx
│   │   ├── ExtractionResults.tsx
│   │   └── ...
│   ├── contexts/         # React contexts
│   │   ├── FormContext.tsx
│   │   └── LanguageContext.tsx
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Third-party integrations
│   │   └── supabase/   # Supabase client and types
│   ├── lib/            # Utility functions
│   │   ├── i18n.ts     # Internationalization
│   │   ├── pdfGenerator.ts
│   │   └── utils.ts
│   ├── pages/          # Page components
│   │   ├── Auth.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── supabase/           # Supabase configuration
│   ├── functions/     # Edge functions
│   └── config.toml    # Supabase config
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🛠 Tech Stack

### Frontend

- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router 6.30.1** - Client-side routing
- **React Hook Form 7.61.1** - Form management
- **Zod 3.25.76** - Schema validation

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### Backend & Database

- **Supabase** - Backend as a Service
  - Authentication
  - Database (PostgreSQL)
  - Edge Functions
  - Storage

### Additional Libraries

- **@tanstack/react-query** - Data fetching and caching
- **pdf-lib** - PDF generation and manipulation
- **date-fns** - Date utilities
- **recharts** - Data visualization
- **sonner** - Toast notifications

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Development Tips

- **Hot Module Replacement (HMR)**: Changes are reflected instantly
- **TypeScript**: Full type checking enabled
- **ESLint**: Code quality and consistency
- **Component Development**: Use Storybook patterns with shadcn/ui

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error boundaries
- Write accessible components (ARIA labels, keyboard navigation)

## 🏗 Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment

The built files can be deployed to:

- **Vercel** (recommended for Vite projects)
- **Netlify**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

### Environment Variables in Production

Make sure to set your environment variables in your hosting platform's dashboard:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Write clear commit messages
- Update README.md if needed
- Ensure all tests pass
- Follow the existing code style
- Add comments for complex logic

## 🔒 Security

### Data Privacy

- Documents are processed securely
- Aadhaar numbers are masked (only last 4 digits shown)
- No data is stored permanently without user consent
- All communications are encrypted

### Best Practices

- Never commit `.env` files
- Use environment variables for sensitive data
- Regularly update dependencies
- Follow OWASP security guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Seva Sahayak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 💬 Support

### Getting Help

- 📧 **Email**: [Your support email]
- 💬 **Issues**: [GitHub Issues](https://github.com/yourusername/seva-easy-fill/issues)
- 📖 **Documentation**: [Your documentation site]

### Reporting Bugs

If you find a bug, please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

### Feature Requests

We welcome feature requests! Please open an issue with:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach (optional)

---

<div align="center">

**Made with ❤️ for simplifying government services in India**

⭐ Star this repo if you find it helpful!

</div>
