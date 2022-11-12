import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

export default function TrackCard({ key, image, trackName, artistName}) {
  return (
    <Flex className=" bg-green-300 py-3 px-3 my-2">
        <Image boxSize="75px" objectFit="cover" src={image} />
        <Flex className=' flex flex-col mx-5' style={{fontFamily: "Lexend"}}>
            <Text className=''>{trackName}</Text>
            <Text className=' text-xs'> {artistName} </Text>
        </Flex>
    </Flex>
  )
}
