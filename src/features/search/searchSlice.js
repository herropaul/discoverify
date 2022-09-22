import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-js";

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

const initialState = {
  loading: false,
  artists: [],
  error: "",
};

const fetchRequest = () => {
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    },
    body: "grant_type=client_credentials",
  });
};

export const getArtistByQuery = createAsyncThunk(
  "search/getArtistByQuery",
  (query) => {
    return fetchRequest()
      .then((result) => result.json())
      .then((data) => {
        const token = data?.access_token;
        const spotify = new SpotifyWebApi();

        spotify.setAccessToken(token);
        return spotify.searchArtists(query, { limit: 10 });
      })
      .then((response) => response?.artists?.items);
  }
);

const artistsSlice = createSlice({
  name: "artists",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getArtistByQuery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getArtistByQuery.fulfilled, (state, action) => {
      state.loading = false;
      console.log("Payload: " + action.payload);
      state.artists = action.payload;
      state.error = "";
    });
    builder.addCase(getArtistByQuery.rejected, (state, action) => {
      state.loading = false;
      state.artists = [];
      state.error = action.error.message;
    });
  },
});

export default artistsSlice.reducer;
