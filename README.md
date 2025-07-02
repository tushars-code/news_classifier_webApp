# 📰 UPSC News Categorization App

A full-stack web application that fetches live news from NewsAPI and automatically categorizes it into UPSC-relevant topics like **Politics, Economy, Science & Tech, Environment, International Affairs,** and more — making daily current affairs organized, simplified, and exam-ready!

---

## 🚀 Features

- 🔄 **Live news fetch** from [NewsAPI](https://newsapi.org/)
- 🧠 **Python-based categorization model** for UPSC tags
- ⚡ **FastAPI** backend to expose the model as an API
- ⚛️ **React.js** frontend to display categorized news
- 📂 Clean and informative UI with category filters (optional)
- 📈 Chart-ready structure for visualization

---

## 💡 Use Case

This app helps:
- Students and UPSC aspirants who want **auto-organized news**
- Educators who want **daily categorized headlines**
- Developers showcasing **real-world AI + frontend skills**
- Recruiters looking for **problem-solving + full-stack ability**

---

## 📸 Demo Preview

![App Screenshot](./screenshot.png)

---

## 🧩 Tech Stack

### ⚙️ Backend (API & Model)
- Python
- FastAPI
- Pandas
- Requests
- NewsAPI
- CORS Middleware

### ⚛️ Frontend
- React.js
- Hooks (`useEffect`, `useState`)
- Fetch API
- JSX + CSS modules

---

## 🧪 How It Works

### 1. FastAPI backend fetches news from NewsAPI
- Endpoint: `GET /news`
- Extracts and cleans `title`, `description`, `url`
- Applies keyword-based tagger for UPSC topics

### 2. React frontend
- Fetches categorized news JSON from backend
- Displays it in an elegant card format with tag badge

---

## 🔥 Live Categories Example

| Title                                  | Category             |
|----------------------------------------|----------------------|
| "India's GDP projected to grow by..."  | Economy              |
| "ISRO launches quantum satellite..."   | Science & Tech       |
| "Monsoon delay affects crops..."       | Environment          |
| "Lok Sabha passes new bill..."         | Politics             |
| "India-China border talks ongoing..."  | International Affairs|

---

## 🛠️ How to Run Locally

### 📦 Backend (FastAPI)
```bash
git clone https://github.com/your-username/upsc-news-app.git
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
