import React, {useState, useEffect} from "react";
import { Flex } from "@chakra-ui/react";
import TrackList from "./TrackList";
import ArtistsGrid from "./ArtistsGrid";
import {useSelector} from 'react-redux';

export default function Grid() {

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const artists = useSelector((state) => state.artistsSlice.artists);
  //const artistName = useSelector((state) => state.update.value.text);

  useEffect(() => {

    // set intial value
    const mediaWatcher = window.matchMedia("(max-width: 1280px)")
    setIsNarrowScreen(mediaWatcher.matches);

    // watch for updates
    function updateIsNarrowScreen (e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen);

    // clean up update 
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
    }
  }, []);

  return (
    // Grid Container
    <div className="">
      {isNarrowScreen 
      ?
      <ArtistsGrid artists={artists}/>
      :
      <Flex>
        <ArtistsGrid artists={artists}/>
        <TrackList artists={artists}/>
      </Flex>
      }
    </div>
  );
}
