# 🚀 Influenso

**Influenso** is a modern influencer discovery platform built with React and Vite.
It helps brands discover, evaluate, and connect with influencers using match scoring, engagement insights, and audience overlap data.

---

## ✨ Features

* 🔎 Discover curated influencer profiles
* ⚡ Intelligent match score system
* 📊 Engagement rate & audience overlap metrics
* 💬 Connect request interaction
* 📱 Fully responsive (mobile-first)
* 🎯 Draggable bottom sheet with smooth animations
* 🧭 Sticky floating navigation bar
* 🌗 Clean modern UI with soft depth & shadows

---

## 🛠 Tech Stack

* **React**
* **Vite**
* **React Router DOM**
* **Framer Motion**
* **Tailwind CSS**
* **React Icons**
* **Netlify (Deployment)**

---

## 📂 Project Structure

```bash
src/
 ├── components/
 │    ├── profile_card.jsx
 │    ├── popup.jsx
 │    └── navigation.jsx
 │
 ├── pages/
 │    ├── discover.jsx
 │    ├── create.jsx
 │    ├── liked.jsx
 │    ├── notifications.jsx
 │    └── profile.jsx
 │
 ├── data/
 │    └── profiles.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/influenso.git
cd influenso
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

App runs at:

```bash
http://localhost:5173
```

---

## 🌍 Deployment (Netlify)

Since this project uses SPA routing (React Router), create a `_redirects` file inside the `public/` folder.

```bash
public/_redirects
```

Add the following line inside it:

```bash
/*  /index.html  200
```

Then deploy normally on Netlify.

---

## 🎨 Design Principles

* Mobile-first experience
* 60fps smooth animations
* Minimal & modern interface
* Accessible tap targets
* Clean line-art icons
* Subtle shadows for depth

---

## 📌 Future Improvements

* 🔐 Authentication system
* 🌐 API integration
* 🔍 Advanced filtering & search
* 📈 Brand analytics dashboard
* 💬 Messaging system
* 🧠 AI-based match recommendations

---

## 📄 License

```bash
MIT License © 2026 Influenso
```

---

Built with ❤️ using React
