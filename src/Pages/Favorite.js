import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Component/Card';

const Favorite = () => {
  const { keyWord,  } = useSelector(state => state.news);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [filteredArticles, setFilteredArticles] = useState(favorites);

  useEffect(() => {
    // Filter articles based on keyWord
    if (keyWord && keyWord.length !== 0) {
      const filtered = favorites.filter(
        article =>
          article.title.toLowerCase().includes(keyWord.toLowerCase()) ||
          article.description.toLowerCase().includes(keyWord.toLowerCase())||
          article.keyWord.toLowerCase().includes(keyWord.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(favorites); // Reset filtered articles to all articles
    }
  }, [keyWord, favorites]);

  useEffect(() => {
    const handleFavoritesUpdate = (event) => {
      setFavorites(event.detail);
    };

    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);

    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

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
