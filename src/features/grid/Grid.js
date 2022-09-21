import React from 'react'
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function Grid() {

  const artists = useSelector(state => state.artistsSlice.artists)

  return (
    <Flex bg="blue.100" direction="column" textAlign="center">
        {artists?.map((artist) => 
          <Flex>{artist.name}</Flex>
        ) }
    </Flex>
  )
}
