import { Input, Flex, FormControl, Button } from '@chakra-ui/react'
import React, { useState, useEffect} from 'react'
import { getArtistByQuery } from './searchSlice';
import SpotifyWebApi from 'spotify-web-api-js';
import './SearchInput.css'
import { useDispatch, useSelector } from 'react-redux';

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const artists = useSelector(state => state.artistsSlice.artists)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getArtistByQuery(query));
    console.log(artists);
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
