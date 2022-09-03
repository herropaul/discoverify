import React from 'react';
import { useEffect } from 'react';
import { getArtistById } from './api/artists/artists';
import { getAuthToken } from './api/spotifyConfig';
import { Flex } from '@chakra-ui/react';
import SearchInput from '../src/features/search/SearchInput';

function App() {

  return (
    <Flex direction="column" textAlign="center">
      Discoverify app
      <SearchInput/>
    </Flex>
  );
}

export default App;
