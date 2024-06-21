// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import Navbar from './Component/Navbar';
import CompleteArticle from './Pages/CompleteArticle';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home category={'top'} />} />
          <Route path="/Sports" element={<Home category={'sports'} />} />
          <Route path="/Science" element={<Home category={'science'} />} />
          <Route path="/Entertainment" element={<Home category={'entertainment'} />} />
          <Route path="/Technology" element={<Home category={'technology'} />} />
          <Route path="/Business" element={<Home category={'business'} />} />
          <Route path="/Health" element={<Home category={'health'} />} />
          <Route path="/Favorite" element={<Favorite  category={'Favorite'}/>  } />
          <Route path="/CompleteArticle/:id" element={<CompleteArticle />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
