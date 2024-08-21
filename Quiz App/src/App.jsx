import React, { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Kategorileri API'den çek
    axios.get('http://localhost:5230/api/Quiz')
      .then(response => {
        // Benzersiz kategorileri çek
        const uniqueCategories = [...new Set(response.data.map(q => q.kategori))];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('API hatası:', error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Seçilen kategoriye göre soruları çek
    axios.get(`http://localhost:5230/api/Quiz?category=${category}`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('API hatası:', error);
      });
  };

  return (
    <div>
      <h1>Kategori Seçin</h1>
      <div>
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategorySelect(category)}>
            {category}
          </button>
        ))}
      </div>


    </div>
  );
};

export default App
