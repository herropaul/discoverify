import React, { useEffect, useState } from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

export default function TrackList({artists, tracks}) {

  //const [mainArtist, setMainArtist] = useState("");

  return (
    <Flex className="bg-red-200" 
    h="32rem" w="25rem"
    mt={5} ml="5rem"
    >
      {artists.length ? 
      (
        <div className=' bg-red-300 w-full '>
        <Text className="mt-3 font-mono font-bold text-xl mb-5">Tracks</Text>
        <Flex className=" bg-green-300 py-3 px-3 my-2">
          <Image boxSize="75px" objectFit="cover" src={tracks[0]?.album?.images[0].url} />
          <Flex className=' flex flex-col mx-5 font-mono'>
            <Text className=''>{tracks[0].name}</Text>
            <Text className=' text-xs'> {artists[0].name} </Text>
          </Flex>
        </Flex>
      </div>
      ) : (
        <Flex className="text-4xl font-bold">
        </Flex>
      )}
    </Flex>
  )
}
