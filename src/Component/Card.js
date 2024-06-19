import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import img from '../Images/null images.jpg';

const Card = ({article, index, }) => {
    
  const [favourite, setFavourites] = useState( JSON.parse(localStorage.getItem('favourites'))|| []);
  const saveFavoriteArticle = (article) => {
    let favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    if(!favoritesList.some(fav=>fav.url === article.url)){
    favoritesList.push(article);
    }
    setFavourites(favoritesList);
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
  };
  
const isFavourite = (article)=>{
  return favourite.some(fav=> fav.url === article.url);
}
  return (
    <div className="relative card rounded-lg hover:shadow-[#0f71dd]  p-4 bg-[#0f172abf] bg-opacity-70" style={{ maxHeight: '400px', overflow: 'hidden', color: '#0ea5e9' }} key={index}>
    <img className="card-img-top border-gray-700 border-b-2" src={article.urlToImage ? article.urlToImage : img} alt="Card image cap" style={{ width: '100%', maxHeight: '200px', height: '200px', objectFit: 'cover' }} />
    <div className="card-body p-2" style={{ padding: '10px' }}>
      <a className="card-title text-blue-300 hover:text-blue-500 block" href={`${article.url}`}>{article.title}</a>

      <p className="card-text text-gray-300 hover:text-gray-200 block mt-2 truncate pb-5" style={{width:'80%'}}>{article.description}</p>
      <div className={`absolute y-3 right-4 text-2xl pb-2 ${isFavourite(article) ? 'text-yellow-500' : 'hover:text-orange-300'}`} onClick={() => saveFavoriteArticle(article)}>
<FaStar/>
</div>


     
      
    </div>
  </div>
  )
}

export default Card
