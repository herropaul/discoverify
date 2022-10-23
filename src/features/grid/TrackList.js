import React, { useEffect } from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function TrackList({artists}) {

  const mainArtist = artists[0]['name'];
  //console.log(mainArtist);


  return (
    <Flex className="bg-red-200" 
    h="32rem" w="25rem"
    mt={5} ml="5rem"
    >
      <div className=' bg-red-300 w-full '>
        <Text className="mt-3 font-mono font-bold text-xl mb-5">Tracks</Text>
        <Flex className=" bg-green-300 py-3 px-3 my-2">
          <Image boxSize="50px" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
          <Flex className=' flex flex-col mx-5 font-mono'>
            <Text className=''>Track 1</Text>
            <Text className=' text-xs'> {mainArtist} </Text>
          </Flex>
        </Flex>
      </div>
    </Flex>
  )
}
