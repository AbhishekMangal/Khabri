import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import imgs from '../Images/null images.jpg';

const Card = ({ article, index }) => {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const saveFavoriteArticle = (article) => {
    let favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favoritesList.some(fav => fav.url === article.url)) {
      favoritesList.push(article);
    } else {
      favoritesList = favoritesList.filter(fav => fav.url !== article.url);
    }
    setFavorites(favoritesList);
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
    
    // Dispatch custom event to notify that favorites have been updated
    const event = new Event('favoritesUpdated');
    window.dispatchEvent(event);
  };

  const isFavorite = (article) => {
    return favorites.some(fav => fav.url === article.url);
  };

  return (
    <div className="relative card rounded-lg hover:shadow-[#0f71dd] p-4 bg-[#0f172abf] bg-opacity-70" style={{ maxHeight: '400px', overflow: 'hidden', color: '#0ea5e9' }} key={index}>
      <img className="card-img-top border-gray-700 border-b-2" src={article.urlToImage ? article.urlToImage : imgs} alt="Card" style={{ width: '100%', maxHeight: '200px', height: '200px', objectFit: 'cover' }} />
      <div className="card-body p-2" style={{ padding: '10px' }}>
        <a className="card-title text-blue-300 hover:text-blue-500 block" href={`${article.url}`}>
          {article.title}
        </a>
        <p className="card-text text-gray-300 hover:text-gray-200 block mt-2 truncate pb-5" style={{ width: '80%' }}>
          {article.description}
        </p>
        <div className="absolute bottom-3 right-4 text-2xl pb-2 cursor-pointer" onClick={() => saveFavoriteArticle(article)}>
          <FaStar className={isFavorite(article) ? 'text-yellow-500' : 'text-gray-400 hover:text-orange-300'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
