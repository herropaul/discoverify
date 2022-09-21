import React, {useState}from 'react';
import { Input, Flex, FormControl, Button } from '@chakra-ui/react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css'
import SearchInput from '../src/features/search/SearchInput';
import Grid from './features/grid/Grid';

function App() {

  // If form is not submitted yet, display the search input 
  // Else, we keep the search input display and display the Grid data with the artists
  return (
    <div className='App'>
      Discoverify
      <SearchInput/>
      <Grid/>
    </div>
  );
}

export default App;
