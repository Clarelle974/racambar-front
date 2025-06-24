# 🃏 Racambar - Frontend

Welcome to the frontend of Racambar, a mini web application for Carambar-style jokes 🍬

✨ About the Project

Racambar is a simple and playful web application developed as part of a recruitment process for a web development program.


## 🚀 Live Demo

➡️ View the app on GitHub Pages: https://clarelle974.github.io/racambar-front/

---

## 🛠️ Tech Stack

- React (with Vite: https://vitejs.dev/)
- CSS (custom styling with clip-path, media queries, and CSS variables)
- Deployment: Manual via GitHub Pages

---

## 📁 Project Structure

racambar-front/
├── public/              # Static assets
├── src/                 # React source code
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── dist/                # Build output (auto-generated)
├── vite.config.js       # Vite configuration
├── package.json
└── README.md

## ⚙️ Run Locally

Clone the repository:

git clone https://github.com/Clarelle974/racambar-front.git
cd racambar-front

Create a .env file in the root directory of the project.

- Add any necessary environment variables following the example of .env.sample.
- Variables prefixed with VITE_ are automatically loaded by Vite and can be accessed in your code with import.meta.env.VITE_API_BASE_URL.
- Make sure not to commit your .env file if it contains sensitive information (add it in the .gitgnore file)

Install dependencies:

npm install

Start the dev server:

npm run dev

Open the app in your browser at http://localhost:5173

## 📦 Build & Manual Deployment

1. Build the project

npm run build

This creates a dist/ folder with the production-ready files.

2. Deploy to GitHub Pages

npm run deploy

Make sure your repository is configured to use the gh-pages branch as the GitHub Pages source.

🔗 Useful Links

Backend API repository: https://github.com/Clarelle974/racambar-back.git

API documentation (Swagger): https://racambar-api.onrender.com/api-docs


