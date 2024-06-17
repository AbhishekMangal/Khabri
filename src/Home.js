import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Component/Navbar';

const Home = () => {
    const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('general')
  const [keyWord, setkeyWord] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       if(category){
        console.log(category);
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?q=${keyWord}&country=${country}&category=${category}&apiKey=b9329e3225d746e595d53e1fa32adf03`);
        setArticles(result.data.articles);
       }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [category]);
  return (
    <>
     <Navbar setCategory={setCategory} category={category}/>
    <div className="App ps-2 pe-2" style={{justifyContent:'center', alignItems:'center', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridGap:'1.5rem', padding:'25px' }}>
      {articles.map((article, index) => (

        <div className="card rounded-lg hover:shadow-[#0f71dd] bg-gray p-3 bg-[#0f172abf]" style={{maxHeight: '400px', overflow:'hidden', height:'450px',color:'#0ea5e9'}} key={index}>
          <img className="card-img-top border-slate-800 border-b-2 " src={article.urlToImage} alt="Card image cap" style={{width:'100%', maxHeight:'200px', height:'200px', objectFit:'cover'}} />
          <div className="card-body" style={{padding:'10px'}}>
            <a className="card-title text-slate-500 hover:text-[#0f71dd]" href={`${article.url}`}>{article.title}</a>
            <br />
            <a className="card-text text-slate-500 hover:text-[#0f71dd]" href={`${article.url}`} >{article.description}</a>
       
          </div>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default Home
