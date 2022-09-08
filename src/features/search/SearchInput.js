import { Input, Flex, FormControl, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './SearchInput.css'

export default function SearchInput() {
  const [query, setQuery] = useState("");
  //const [artists, setArtists] = useState({});
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
        //setArtists(data);
        console.log('Search results: ', data.artists.items)
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
    setQuery("");
  }

  return (
    <Flex textAlign="center" m={5}>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Input mb={5} type="text" onChange={handleChange} placeholder='Enter artist' size="md"/>
                <Button type="submit">Click Me</Button>
            </FormControl>
        </form>
    </Flex>
  )
}
