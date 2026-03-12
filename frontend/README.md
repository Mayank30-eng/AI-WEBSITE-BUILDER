# GenLoop — AI Website Builder

A full-stack AI-powered website builder that generates responsive, production-ready websites from natural language prompts.

## Tech Stack

- **Frontend:** React 19, Vite, TailwindCSS 4, Redux Toolkit, Monaco Editor
- **Backend:** Express 5, MongoDB, Mongoose, Firebase Auth
- **AI:** OpenRouter API (DeepSeek)
- **Payments:** Razorpay

## Features

- AI website generation from text prompts
- Live code editor with real-time preview
- Iterative editing via conversation
- One-click deploy with shareable links
- Google authentication
- Credit-based usage with Razorpay payments
- Fully responsive generated output

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Firebase project with Google Auth enabled
- OpenRouter API key
- Razorpay account (test mode)

### Setup

1. Clone the repo
2. Copy `sample.env` to `.env` in both `frontend/` and `backend/`
3. Fill in your environment variables
4. Install dependencies:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
5. Start development servers:
   ```bash
   # Terminal 1 — Backend
   cd backend && npm run dev

   # Terminal 2 — Frontend
   cd frontend && npm run dev
   ```

## Project Structure

```
├── backend/
│   ├── config/         # OpenRouter, Razorpay, plan configs
│   ├── controllers/    # Auth, website, payment controllers
│   ├── database/       # MongoDB connection
│   ├── middlewares/     # JWT auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── utils/           # Helper functions
└── frontend/
    └── src/
        ├── components/  # Navbar, LoginModal
        ├── pages/       # Home, Generate, Editor, Dashboard, Pricing
        ├── redux/       # Store and user slice
        └── firebase.js  # Firebase config
```
