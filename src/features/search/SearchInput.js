import { Input, Flex, FormControl, Button } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons';
import React, { useState} from 'react'
import { getArtistByQuery } from './searchSlice';
import { getTrackByQuery } from '../grid/trackSlice';
import './SearchInput.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateValue } from '../grid/updateSlice';

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  //const artists = useSelector(state => state.artistsSlice.artists)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getArtistByQuery(query));
    dispatch(getTrackByQuery(query));
    //dispatch(updateValue(query));
    //setQuery("");
    navigate("/results");
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
