// src/components/Home.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles, setLoading, setPage, setTotalResults } from '../Features/news/newsSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import Card from '../Component/Card'; // Adjust the path based on your actual file structure

const Home = ({ category }) => {
  const dispatch = useDispatch();
  const { articles, loading, page, totalResults, keyWord } = useSelector(state => state.news);

  const fetchData = async () => {
    if (!page) return; // Stop if there is no next page

    dispatch(setLoading(true));
    let url;
    if (keyWord.length === 0) {
      url = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_URL}&page=${page}&country=in&category=${category}&language=en,hi`;
    } else {
      url = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_URL}&page=${page}&country=in&category=${category}&language=en,hi&q=${keyWord}`;
    }
    try {
      const result = await axios.get(url);
      dispatch(setArticles([...articles, ...result.data.results]));
      dispatch(setPage(result.data.nextPage));
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      dispatch(setLoading(true));
      try {
        let url;
        if (keyWord.length === 0) {
          url = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_URL}&country=in&category=${category}&language=en,hi`;
        } else {
          url = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_URL}&country=in&category=${category}&language=en,hi&q=${keyWord}`;
        }
        const result = await axios.get(url);
        dispatch(setArticles(result.data.results));
        dispatch(setPage(result.data.nextPage));
        dispatch(setTotalResults(result.data.totalResults));
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    initialFetch();
  }, [category, keyWord]);

  return (
    <>
      {loading && page === null && (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
          <ClipLoader color="white" loading={loading} size={150} />
        </div>
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={page !== null}
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
          dispatch(setArticles([]));
          dispatch(setPage(1));
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
            <Card article={article} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
