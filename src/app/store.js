import { configureStore } from '@reduxjs/toolkit';
import artistReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    artistsSlice: artistReducer,
  },
});
