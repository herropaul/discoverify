import React from "react";
import { Flex, Image, Text, Container } from "@chakra-ui/react";
import ArtistCard from "./ArtistCard";
import { useSelector } from "react-redux";

export default function Grid() {

  const artists = useSelector((state) => state.artistsSlice.artists);
  //const mainArtist = artists[0]; 

  return (
    // Grid Container
    <Flex className="items-center max-w-lg md: max-w-3xl lg: max-w-5xl">
      {artists.length ? (
        <div className="w-full mx-4">
          {artists.map((artist) => {
            if(artist.images.length === 0) {
              return <ArtistCard image="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" name={artist.name}/>
            }
            return <ArtistCard image={artist.images[0].url} name={artist.name}/>
          })}
        </div>
      ) : (
        <Flex className="text-4xl font-bold"></Flex>
      )}
    </Flex>
  );
}
