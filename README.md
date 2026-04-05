# Seva Sahayak (Seva Easy Fill)
### Intel AI Unnati Program – Internship Project

<div align="center">

![Seva Sahayak](https://img.shields.io/badge/Seva-Sahayak-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**AI-Powered Government Form Filling Assistant for India**

Automatically fill Indian government forms by uploading ID documents using OCR and AI.

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech-Stack](#-tech-stack) 

</div>

---

## 🎯 Overview

**Seva Sahayak** is an AI-powered web application developed under the **Intel AI Unnati Program Internship**.  
It simplifies government form filling by extracting information from documents such as Aadhaar, PAN, Voter ID, Passport, etc., using OCR and smart field mapping.

### Problem
- Manual data entry is slow and error-prone  
- Language barriers for citizens  
- Repetitive form filling across services  

### Solution
- Automated document data extraction  
- Smart form auto-filling  
- Multi-language and voice support  
- Secure and user-friendly interface  

---

## ✨ Features

### Core Features
- 📄 **Document Upload** (Aadhaar, PAN, Voter ID, DL, Passport)
- 🤖 **OCR Extraction** with confidence scoring
- 📝 **Smart Form Filling** with manual edit option
- 🌍 **10+ Indian Languages** support
- 🎤 **Voice Input** for form fields
- 📄 **PDF Generation** of filled forms
- 🔐 **Secure Processing** (masked Aadhaar, no permanent storage)

### User Experience
- Step-by-step form wizard
- Responsive design (desktop, tablet, mobile)
- Accessible UI with validation feedback

---
## 🚀 Installation

### Prerequisites
- Node.js **18+**
- npm or bun
- Git



## 📁 Project Structure

```text
seva-easy-fill-main/
├── src/
│   ├── components/        # UI & form components
│   ├── contexts/          # Global state
│   ├── hooks/             # Custom hooks
│   ├── integrations/      # Supabase integration
│   ├── lib/               # OCR, i18n, utils
│   ├── pages/             # App pages
│   ├── App.tsx
│   └── main.tsx
├── supabase/              # Edge functions & config
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

## 🛠 Tech Stack

### Frontend
- **React 18** – Component-based UI library
- **TypeScript** – Type-safe JavaScript
- **Vite** – Fast build tool and dev server
- **React Router** – Client-side routing
- **React Hook Form + Zod** – Form handling and validation

### UI & Styling
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Reusable, accessible UI components
- **Radix UI** – Unstyled accessible primitives
- **Lucide Icons** – Modern icon library
- **Dark Mode** – Theme support with system preference

### Backend
- **Supabase**
  - Authentication
  - PostgreSQL Database
  - Edge Functions (serverless)
- **OCR + AI Extraction**
  - Document text extraction via Edge Functions
  - Intelligent field mapping and validation

## 💻 Usage

1. **Sign Up / Login**  
   Create a new account or log in to an existing one.

2. **Select Government Form**  
   Choose the required government form from the available list.

3. **Upload ID Document**  
   Upload a clear ID document (PDF / JPG / PNG, max size: 10MB).

4. **Review Extracted Data**  
   Verify the automatically extracted details and check confidence levels.

5. **Auto-Fill & Edit Form**  
   The form is auto-filled using extracted data. Edit fields if required.

6. **Download Filled PDF**  
   Generate and download the completed form as a PDF.


## 🏗 Build for Production

```bash
npm run build
npm run preview
```

## 🔒 Security & Privacy

- **Aadhaar Numbers Masked** – Only the **last 4 digits** are displayed  
- **Secure HTTPS Communication** for all requests  
- **No Permanent Document Storage** without explicit user consent  
- **Sensitive Keys** managed using **environment variables**



## 📄 License

MIT License © 2026 Vishwajit Kamble 


## 👤 Author

**Vishwajit Kamble**  
Intel AI Unnati Program – Internship Project  
**Year:** 2026


<div align="center">

Made with ❤️ for simplifying government services in India

⭐ Star the repo if you find it helpful
Part of Intel AI Unnati Program Internship

</div> 



