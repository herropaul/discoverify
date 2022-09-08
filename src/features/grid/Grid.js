import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function Grid({artists}) {
  return (
    <Flex bg="blue.100">
        {artists?.map((artist) => 
          <Flex>{artist.name}</Flex>
        ) }
    </Flex>
  )
}
