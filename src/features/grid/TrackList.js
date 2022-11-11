import React, { useEffect, useState } from 'react'
import TrackCard from './TrackCard'
import { Flex, Text, Image } from '@chakra-ui/react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTrackById } from './trackSlice';

export default function TrackList({artists}) {

  //const [mainArtist, setMainArtist] = useState("");
  const dispatch = useDispatch();
  const {tracks, loading, error} = useSelector((state) => state.tracksSlice);

  useEffect(() => {
    if(artists.length){
    const payload = {
      artistID: artists[0].id,
      countryID: "US",
    }
    dispatch(getTrackById(payload));
  }
  return;
    //console.log(tracks);
  },[dispatch, artists])


  return (
    <Flex overflowX="scroll" sx={{scrollbarWidth: "none"}} className="bg-red-200" 
    h="32rem" w="25rem"
    mt={5} ml="5rem"
    >
      {artists.length ? 
      (
        <div className=' bg-red-300 w-full '>
        <Text className="mt-3 mb-5 font-mono font-bold text-xl text-center ">Tracks</Text>
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
