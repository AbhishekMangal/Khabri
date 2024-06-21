// src/features/news/newsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: false,
  page: 1,
  totalResults: 0,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  keyWord: '',
  category: '',
  menuOpen: false,
  drop: false,
  selectedArticle: {}
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
      localStorage.setItem('favorites', JSON.stringify(action.payload));
    },
    setKeyWord(state, action) {
      state.keyWord = action.payload;
    },
    setCategory(state, action) {
        state.category = action.payload;
    },
    setMenuOpen(state, action)
    {
        state.menuOpen = action.payload
    },
    setDrop(state, action)
    {
        state.drop = action.payload
    },
    setSelectedArticle(state, action)
    {
      state.selectedArticle = action.payload
    }
  },
});

export const {
  setArticles,
  setLoading,
  setPage,
  setTotalResults,
  setFavorites,
  setKeyWord,
  setCategory,
  setMenuOpen,
  setDrop,
  setSelectedArticle
} = newsSlice.actions;

export default newsSlice.reducer;
