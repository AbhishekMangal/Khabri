import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Component/Card';
import ClipLoader from "react-spinners/ClipLoader";

const Home = ({ category, keyWord }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);


  const fetchData = async () => {
    
    setLoading(true);
    try {
      const result = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_468882fb67bd9a3bc58fdf38cabf28d7b26eb&country=in&category=${category}&language=en,hi`,
      );
      setArticles(prevArticles => [...prevArticles, ...result.data.results]);
      
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      try {
        console.log(keyWord);
        const result = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_468882fb67bd9a3bc58fdf38cabf28d7b26eb&country=in&category=${category}&language=en,hi`);
        setArticles(result.data.results);
        setPage(2);
        setTotalResult(result.data.totalResults);
        console.log(totalResult)
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    initialFetch();
  }, [category, keyWord]);

  return (
    <>
      {loading && page === 2 && (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
          <ClipLoader color="white" loading={loading} size={150} />
        </div>
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalResult}
        loader={
          <div className="flex justify-center items-center my-4">
            <ClipLoader color="white" loading={loading} size={50} />
          </div>
        }
        endMessage={
          <p style={{ textAlign: 'center' }} className='text-slate-300 text-2xl p-5'>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={() => {
          setArticles([]);
          setPage(1);
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
        <div className="App p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
           article.title !== "[Removed]" &&  
            <Card article={article} key={index} />
            
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
