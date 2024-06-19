import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Navbar from '../Component/Navbar';

import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Component/Card';


const Home = ({category, keyWord}) => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('in');
 

  const [page, setPage] = useState(2);
  const [totalResult, setTotalResult] = useState(0);

  const [favourite, setFavourites] = useState( JSON.parse(localStorage.getItem('favourites'))|| []);
  
  const fetchData = async () => {
    try {
      const result = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=c5de9d90d852436d868f5f1e17e4b1f3`);
      setArticles(prevArticles => [...prevArticles, ...result.data.articles]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=c5de9d90d852436d868f5f1e17e4b1f3`);
        setArticles(result.data.articles);
        setPage(2);
        setTotalResult(result.data.totalResults)
     
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    initialFetch();
  }, [category, keyWord, country]);


  return (
    <>
    
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalResult}
        loader={<h4 className='text-center text-3xl text-slate-300 p-4'>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }} className='text-slate-300 text-2xl p-5'>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={() => {
          setArticles([]);
          setPage(page+1);
          fetchData();
        }}
        pullDownToRefresh
        pullDownToRefreshThreshold={10}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        <div className="App p-4  grid md:grid-cols-2 gap-2 lg:grid-cols-4 gap-4 w-100">
          {articles.map((article, index) => (
            <Card article={article} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
