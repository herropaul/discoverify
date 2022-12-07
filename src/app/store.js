import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "../features/search/searchArtistsSlice";
import trackReducer from "../features/grid/trackSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    searchSlice: searchReducer,
    artistsSlice: artistReducer,
    tracksSlice: trackReducer,
  },
});
