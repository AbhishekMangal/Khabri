// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../Features/news/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
