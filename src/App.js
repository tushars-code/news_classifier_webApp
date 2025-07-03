import React, { useEffect, useState } from "react";
import "./App.css";

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Failed to fetch news:", error);
        setError("Failed to load news. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>📰 UPSC News Categorizer</h1>
        <p>Your daily dose of current affairs with relevant UPSC tags</p>
      </header>
      {loading ? (
        <p className="loading">⏳ Loading news...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        news.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span className="badge">UPSC Tag: {item.category}</span>
            <br />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read full article
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default NewsList;