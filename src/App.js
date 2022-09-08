import React, {useState}from 'react';
import { Input, Flex, FormControl, Button } from '@chakra-ui/react';
import SpotifyWebApi from 'spotify-web-api-js';
//import SearchInput from '../src/features/search/SearchInput';
import Grid from './features/grid/Grid';

function App() {
  const [query, setQuery] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [artists, setArtists] = useState({});
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;

  const getArtistByQuery = async (query) => {
    await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    },
    body: 'grant_type=client_credentials',
})
    .then((result) => result.json())
    .then((data) => {
      //console.log(data?.access_token)
      const token = data?.access_token;
      const spotify = new SpotifyWebApi();

      spotify.setAccessToken(token);
      spotify.searchArtists(query, {limit: 10})
      .then((data) => {
        setArtists(data.artists.items);
        console.log('Search results: ', data.artists.items)
        //console.log('Type: ', typeof(data.artists.items))
      })
    })
    .catch((error) => console.log('Error: ', error));
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getArtistByQuery(query);
    setIsSubmitted(!isSubmitted);
    setQuery("");
  }

  // If form is not submitted yet, display the search input 
  // Else, we keep the search input display and display the Grid data with the artists
  return (
    <Flex direction="column" alignItems="center" textAlign="center">
      Discoverify app
      {!isSubmitted ? (
        <Flex textAlign="center" m={5}>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Input mb={5} type="text" onChange={handleChange} placeholder='Enter artist' size="md"/>
                <Button type="submit">Click Me</Button>
            </FormControl>
        </form>
      </Flex>
      ) : (
      <Flex direction="column">
        <Flex textAlign="center" m={5}>
          <form onSubmit={handleSubmit}>
              <FormControl>
                  <Input mb={5} type="text" onChange={handleChange} placeholder='Enter artist' size="md"/>
                  <Button type="submit">Click Me</Button>
              </FormControl>
          </form>
        </Flex>
        <Grid artists={artists}/>
      </Flex>
      )}
  </Flex>
  );
}

export default App;
