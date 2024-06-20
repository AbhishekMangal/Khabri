import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';

import Navbar from './Component/Navbar';

function App() {
 
  const [keyWord, setKeyword] = useState('');
  return (
    <BrowserRouter>
    <Navbar setKeyword={setKeyword} keyWord={keyWord} />
      <Routes>
        <Route path="/" element={<Home category={'top'} keyWord={keyWord}/>} />
        <Route path="/Sports" element={<Home category={'sports'} keyWord={keyWord}/>} />
        <Route path="/Science" element={<Home category={'science'} keyWord={keyWord}/>} />
        <Route path="/Entertainment" element={<Home category={'entertainment'} keyWord={keyWord}/>} />
        <Route path="/Technology" element={<Home category={'technology'} keyWord={keyWord}/>} />
        <Route path="/Business" element={<Home category={'business'} keyWord={keyWord}/>} />
        <Route path="/Health" element={<Home category={'health'} keyWord={keyWord}/>} />
        <Route path="/Favorite" element={<Favorite keyWord={keyWord}/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
