import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5230/api/quiz')
      .then(response => {
        const data = response.data;
        const uniqueCategories = new Set(data.map(item => item.category));
        setCategories([...uniqueCategories]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="app-container">
      <div className="hero-section">
        <h1 className="hero-title">Quiz Kategorinizi Seçin</h1>
        <p className="hero-description">Sınav maceranıza başlamak için bir kategori seçin!</p>
      </div>
      <div className="category-container">
        {categories.length > 0 ? (
          <div className="category-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h2 className="category-title">{category}</h2>
                <button className="start-button">Start Quiz</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No categories found.</p>
        )}
      </div>
      <div class="sticker sticker1"></div>
      <div class="sticker sticker2"></div>
      <div class="sticker sticker3"></div>
      <div class="sticker sticker4"></div>
      <div class="sticker sticker5"></div>
      <div class="sticker sticker6"></div>
      <div class="sticker sticker7"></div>
      <div class="sticker sticker8"></div>
      <div class="sticker sticker9"></div>
      <div class="sticker sticker10"></div>
      <div class="sticker sticker11"></div>

      <div class="sticker sticker12"></div>
    </div>
  );
};

export default App;
