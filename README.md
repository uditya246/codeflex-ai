# CodeFlex AI 🏋️

An AI-powered fitness coaching platform that generates personalized workout and diet plans through a voice conversation.

🚀 **Live Demo:** https://codeflex-ai-sandy.vercel.app

---

## Features

- 🎙️ Voice conversation with an AI fitness coach
- 🏃 Personalized workout plan based on your goals, fitness level, and schedule
- 🥗 Custom diet plan with daily calorie targets and meal suggestions
- 👤 Profile page to view and switch between all your plans
- 🔐 Secure authentication with sign in / sign up

---

## Tech Stack

- **Next.js 15** — Frontend framework
- **Clerk** — Authentication
- **Convex** — Backend and real-time database
- **Vapi** — Voice AI platform
- **Groq** — LLM inference (Llama 3.3 70B)
- **Tailwind CSS + shadcn/ui** — Styling

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/uditya246/codeflex-ai.git
cd codeflex-ai

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file and add your keys for:
# Clerk, Convex, Vapi, and Groq

# Start Convex dev server
npx convex dev

# Start the app
npm run dev
```

---

## Screenshots

### 🏠 Home Page
![CodeFlex AI Home](https://raw.githubusercontent.com/uditya246/codeflex-ai/main/screenshots/home.png)

### 🎙️ Generate Your Fitness Program
![Generate Fitness Program](https://raw.githubusercontent.com/uditya246/codeflex-ai/main/screenshots/generate.png)

### 👤 Profile & Fitness Plans
![Profile Page](https://raw.githubusercontent.com/uditya246/codeflex-ai/main/screenshots/profile.png)

---

## Author

Built by [Uditya Yadav](https://github.com/uditya246)
