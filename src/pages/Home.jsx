import React from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../api";
import "../App.css";

function Home() {
  const categories = getCategories();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/quiz/${category}`);
  };

  return (
    <div className="app-container">
      <div className="hero-section">
        <h1 className="hero-title">Bir Kategori Seçin</h1>
        <p className="hero-description">
          Sınav maceranıza başlamak için bir kategori seçin!
        </p>
      </div>
      <div className="category-container">
        {categories.length > 0 ? (
          <div className="category-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h2 className="category-title">{category}</h2>
                <button
                  className="start-button"
                  onClick={() => handleCategoryClick(category)}
                >
                  Başla!
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Kategori bulunamadı.</p>
        )}
      </div>
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`sticker sticker${i + 1}`}></div>
      ))}
    </div>
  );
}

export default Home;
