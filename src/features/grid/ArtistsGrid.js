import React, {useEffect} from 'react'
import { Flex } from '@chakra-ui/react'
import ArtistCard from "./ArtistCard";
import { Link } from 'react-router-dom';

export default function ArtistsGrid({artists}) {

  return (
    <Flex className="items-center max-w-lg md:max-w-3xl lg:max-w-5xl">
      {artists.length ? (
        <div className="w-full mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => {
            if(artist.images.length === 0) {
              return (
                <ArtistCard key={artist.id} id={artist.id} image="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" name={artist.name} type={artist.type}/>
              )
            }
            return (
              <ArtistCard key={artist.id} id={artist.id} image={artist.images[0].url} name={artist.name} type={artist.type}/>
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
