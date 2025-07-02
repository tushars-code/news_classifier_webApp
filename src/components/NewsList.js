import React, { useEffect, useState } from "react";

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://news-classifier-webapp-backendmodel.onrender.com/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
      })
      .catch((error) => {
        console.error("Failed to fetch news:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📰 UPSC Categorized News</h2>
      {news.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px", borderRadius: "8px" }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><strong>UPSC Tag:</strong> {item.category}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">Read full article</a>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
