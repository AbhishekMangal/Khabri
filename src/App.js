import React, { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import Navbar from './Component/Navbar';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=b9329e3225d746e595d53e1fa32adf03");
        setArticles(result.data.articles);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <Navbar/>
    <div className="App ps-2 pe-2" style={{justifyContent:'center', alignItems:'center', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridGap:'1.5rem', padding:'25px' }}>
      {articles.map((article, index) => (

        <div className="card rounded-md hover:shadow-[#0f71dd]" style={{maxHeight: '400px', overflow:'auto', height:'450px', backgroundColor:'transparent',color:'#0ea5e9'}} key={index}>
          <img className="card-img-top " src={article.urlToImage} alt="Card image cap" style={{width:'100%', maxHeight:'200px', height:'200px', objectFit:'cover'}} />
          <div className="card-body" style={{padding:'10px'}}>
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
    </>

  );
}

export default App;
