import { configureStore } from '@reduxjs/toolkit';
import artistReducer from '../features/search/searchSlice';
import trackReducer from '../features/grid/trackSlice';

export const store = configureStore({
  reducer: {
    artistsSlice: artistReducer,
    tracksSlice: trackReducer,
  },
});
