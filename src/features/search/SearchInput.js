import { Input, Flex, FormControl, Button } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons';
import React, { useState} from 'react'
import { getArtistByQuery } from './searchSlice';
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
            <FormControl className=' flex flex-row'>
                <Input mb={5} type="text" onChange={handleChange} placeholder='Enter artist' _placeholder={{ opacity: 1, color: 'gray.500' }} size="md"/>
                <Button mx={1} colorScheme="green" leftIcon={<SearchIcon/>} type="submit">Search</Button>
            </FormControl>
        </form>
    </Flex>
  )
}
