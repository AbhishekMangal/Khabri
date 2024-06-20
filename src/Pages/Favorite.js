import React, { useEffect, useState } from 'react';
import Card from '../Component/Card';

const Favorite = ({ keyWord }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage when component mounts
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setArticles(favorites);

    // Set up a custom event listener to detect changes in favorites
    const handleFavoritesUpdate = () => {
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setArticles(updatedFavorites);
    };

    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

  useEffect(() => {
    // Filter articles based on keyWord
    if (keyWord && keyWord.length !== 0) {
      const filtered = articles.filter(
        article =>
          article.title.toLowerCase().includes(keyWord.toLowerCase()) ||
          article.description.toLowerCase().includes(keyWord.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles); // Reset filtered articles to all articles
    }
  }, [keyWord, articles]);

  return (
    <div className="App p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {filteredArticles.length !== 0 ? (
        filteredArticles.map((article, index) => (
          <Card article={article} key={index} />
        ))
      ) : (
        <div className="flex justify-center col-span-full h-full">
          <p className="text-slate-300 text-2xl p-5">
            <b>No favorite articles found!</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
