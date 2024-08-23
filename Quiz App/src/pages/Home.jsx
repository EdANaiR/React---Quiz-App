import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    const handleCategoryClick = (category) => {
        navigate(`/quiz/${category}`);
    };

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="app-container">
            <div className="hero-section">
                <h1 className="hero-title">Bir Kategori Seçin</h1>
                <p className="hero-description">Sınav maceranıza başlamak için bir kategori seçin!</p>
            </div>
            <div className="category-container">
                {categories.length > 0 ? (
                    <div className="category-grid">
                        {categories.map((category, index) => (
                            <div key={index} className="category-card">
                                <h2 className="category-title">{category}</h2>
                                <button className="start-button" onClick={() => handleCategoryClick(category)}>Başla!</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No categories found.</p>
                )}
            </div>
            <div className="sticker sticker1"></div>
            <div className="sticker sticker2"></div>
            <div className="sticker sticker3"></div>
            <div className="sticker sticker4"></div>
            <div className="sticker sticker5"></div>
            <div className="sticker sticker6"></div>
            <div className="sticker sticker7"></div>
            <div className="sticker sticker8"></div>
            <div className="sticker sticker9"></div>
            <div className="sticker sticker10"></div>
            <div className="sticker sticker11"></div>
            <div className="sticker sticker12"></div>
        </div>
    );
};

export default Home;
