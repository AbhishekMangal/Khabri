import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';

import Navbar from './Component/Navbar';

function App() {
  const [category, setCategory] = useState('general');
  const [keyWord, setKeyword] = useState('');
  return (
    <BrowserRouter>
    <Navbar setCategory={setCategory} category={category} setKeyword={setKeyword} keyWord={keyWord} />
      <Routes>
        <Route path="/" element={<Home category={'general'} keyWord={keyWord}/>} />
        <Route path="/Sports" element={<Home category={category} keyWord={keyWord}/>} />
        <Route path="/Science" element={<Home category={category} keyWord={keyWord}/>} />
        <Route path="/Entertainment" element={<Home category={category} keyWord={keyWord}/>} />
        <Route path="/Technology" element={<Home category={category} keyWord={keyWord}/>} />
        <Route path="/Business" element={<Home category={category} keyWord={keyWord}/>} />
        <Route path="/Health" element={<Home category={category} keyWord={keyWord}/>} />
        <Route path="/Favorite" element={<Favorite/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
