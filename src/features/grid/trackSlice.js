import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-js";
import { fetchRequest } from "../search/searchSlice";

const initialState = {
    loading: false,
    tracks: [],
    error: "",
};

export const getTrackByQuery = createAsyncThunk(
    "grid/getTrackByQuery",
    (query) => {
      return fetchRequest()
        .then((result) => result.json())
        .then((data) => {
          const token = data?.access_token;
          const spotify = new SpotifyWebApi();
  
          spotify.setAccessToken(token);
          return spotify.searchTracks(query, { limit: 5, offset: 0 });
        })
        .then((response) => response?.tracks?.items);
    }
);

const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getTrackByQuery.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getTrackByQuery.fulfilled, (state, action) => {
        state.loading = false;
        //console.log("Payload: " + action.payload);
        state.tracks = action.payload;
        state.error = "";
      });
      builder.addCase(getTrackByQuery.rejected, (state, action) => {
        state.loading = false;
        state.tracks = [];
        state.error = action.error.message;
      });
    }
});

export default tracksSlice.reducer;