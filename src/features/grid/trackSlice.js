import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-js";
import { fetchRequest } from "../search/searchArtistsSlice";

const initialState = {
  loading: false,
  tracks: [],
  error: "",
};

export const getTrackById = createAsyncThunk("grid/getTrackById", (payload) => {
  const { artistID, countryID } = payload;
  return fetchRequest()
    .then((result) => result.json())
    .then((data) => {
      const token = data?.access_token;
      const spotify = new SpotifyWebApi();

      spotify.setAccessToken(token);
      return spotify.getArtistTopTracks(artistID, countryID);
    })
    .then((response) => response?.tracks);
});

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTrackById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrackById.fulfilled, (state, action) => {
      state.loading = false;
      //console.log("Payload: " + action.payload);
      state.tracks = action.payload;
      state.error = "";
    });
    builder.addCase(getTrackById.rejected, (state, action) => {
      state.loading = false;
      state.tracks = [];
      state.error = action.error.message;
    });
  },
});

export default tracksSlice.reducer;
