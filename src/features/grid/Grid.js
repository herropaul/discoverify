import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function Grid() {

  const artists = useSelector(state => state.artistsSlice.artists)
  const mainArtist = artists[0] // Artist object

  return (
    <Flex bg="blue.100" direction="column" >
        {/* {artists?.map((artist) => 
          <Flex>{artist.name}</Flex>
        ) } */}
        <Image boxSize="150px" borderRadius="full" src={mainArtist.images[0].url}/>
        <Text fontSize="3xl">{mainArtist.name}</Text>

    </Flex>
  )
}
