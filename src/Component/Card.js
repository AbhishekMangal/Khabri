import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import imgs from '../Images/null images.jpg';
import { setSelectedArticle } from '../Features/news/newsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Card = ({ article, index }) => {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveFavoriteArticle = (article) => {
    let favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favoritesList.some(fav => fav.url === article.url)) {
      favoritesList.push(article);
    } else {
      favoritesList = favoritesList.filter(fav => fav.url !== article.url);
    }
    setFavorites(favoritesList);
    localStorage.setItem('favorites', JSON.stringify(favoritesList));

    const event = new CustomEvent('favoritesUpdated', { detail: favoritesList });
    window.dispatchEvent(event);
  };

  const isFavorite = (article) => {
    return favorites.some(fav => fav.url === article.url);
  };

  const handleClick = (article) => {
    dispatch(setSelectedArticle(article));

  };

  return (
    <div className="relative card rounded-lg hover:shadow-[#0f71dd] p-4 bg-[#0f172abf] bg-opacity-70" style={{ maxHeight: '400px', overflow: 'hidden', color: '#0ea5e9' }} key={index}>
      <img className="card-img-top border-gray-700 border-b-2" src={article.image_url ? article.image_url : imgs} alt="Card" style={{ width: '100%', maxHeight: '200px', height: '200px', objectFit: 'cover' }} />
      <div className="card-body p-2" style={{ padding: '10px' }}>
        <Link className="card-title text-blue-300 hover:text-blue-500 block" onClick={() => handleClick(article)} to={`/CompleteArticle/${article.article_id}`}>
          {article.title}
        </Link>
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
