import React, { useEffect, useState } from 'react'
import TrackCard from './TrackCard'
import { Flex, Text, Image } from '@chakra-ui/react'

export default function TrackList({artists, tracks}) {

  //const [mainArtist, setMainArtist] = useState("");

  return (
    <Flex overflowX="scroll" className="bg-red-200" 
    h="32rem" w="25rem"
    mt={5} ml="5rem"
    >
      {artists.length && tracks.length ? 
      (
        <div className=' bg-red-300 w-full '>
        <Text className="mt-3 font-mono font-bold text-xl mb-5">Tracks</Text>
        {tracks.map((track) => {
          if(track.album.images === 0){
            return(
              <TrackCard key={track.id} image="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" trackName={track.name} artistName={track.artists[0].name} />
            )
          }
          return (
            <TrackCard key={track.id} image={track?.album?.images[0].url} trackName={track.name} artistName={track.artists[0].name} />
          )
        })}
      </div>
      ) : (
        <Flex className="text-4xl font-bold">
        </Flex>
      )}
    </Flex>
  )
}
