import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import img from './Images/null images.jpg'
const Home = () => {
    const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('general')
  const [keyWord, setKeyword] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       if(category){

        const result = await axios.get(`https://newsapi.org/v2/top-headlines?q=${keyWord}&country=${country}&category=${category}&apiKey=c5de9d90d852436d868f5f1e17e4b1f3`);
        setArticles(result.data.articles);
       setKeyword('');
       }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [category, keyWord, keyWord.length != 0]);
  return (
    <>
     <Navbar setCategory={setCategory} category={category} setKeyword={setKeyword} keyWord={keyWord}/>
    <div className="App p-4 grid md:grid-cols-2 gap-2 lg:grid-cols-4 gap-4 w-100">
      {articles.map((article, index) => (

        <div className="card rounded-lg hover:shadow-[#0f71dd]  p-4 bg-[#0f172abf] bg-opacity-70" style={{maxHeight: '400px', overflow:'hidden',color:'#0ea5e9'}} key={index}>
          <img className="card-img-top border-gray-700 border-b-2 " src={article.urlToImage? article.urlToImage :img} alt="Card image cap" style={{width:'100%', maxHeight:'200px', height:'200px', objectFit:'cover'}} />
          <div className="card-body p-2" style={{padding:'10px'}}>
            <a className="card-title text-blue-300 hover:text-blue-500 block" href={`${article.url}`}>{article.title}</a>
            <br />
            <p className="card-text text-gray-300 hover:text-gray-200 block mt-2 truncate"  >{article.description}</p>
       
          </div>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default Home
