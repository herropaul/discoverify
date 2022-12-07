import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-js";
import { fetchRequest } from "../search/searchArtistsSlice";

const initialState = {
  loading: false,
  onChangeArtists: [],
  error: "",
};

export const searchArtists = createAsyncThunk(
  "search/searchArtists",
  (query) => {
    return fetchRequest()
      .then((result) => result.json())
      .then((data) => {
        const token = data?.access_token;
        const spotify = new SpotifyWebApi();

        spotify.setAccessToken(token);
        return spotify.search(query, ["artist"]);
      })
      .then((response) => response?.artists?.items);
  }
);

const searchSlice = createSlice({
  name: "onChangeArtists",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchArtists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchArtists.fulfilled, (state, action) => {
      state.loading = false;
      state.onChangeArtists = action.payload;
      state.error = "";
    });
    builder.addCase(searchArtists.rejected, (state, action) => {
      state.loading = false;
      state.onChangeArtists = [];
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
