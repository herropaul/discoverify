import React, { useState, useEffect } from "react";
import { Flex, Center, Text } from "@chakra-ui/react";
import TrackList from "./TrackList";
import ArtistsGrid from "./ArtistsGrid";
import SearchInput from "../search/SearchInput";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Grid() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const { artists, loading, error } = useSelector(
    (state) => state?.artistsSlice
  );
  //const tracks = useSelector((state) => state.tracksSlice.tracks);
  //const artistName = useSelector((state) => state.update.value.text);

  useEffect(() => {
    // set intial value
    const mediaWatcher = window.matchMedia("(max-width: 1280px)");
    setIsNarrowScreen(mediaWatcher.matches);

    // watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    // clean up update
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  }, []);

  return (
    // Grid Container
    <div
      className=" min-h-screen flex justify-center"
      style={{ background: "#121212" }}
    >
      {isNarrowScreen ? (
        <Flex className="flex-col mt-10">
          <Center className="">
            <Link to="/">
              <Text
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "Lexend" }}
              >
                Discoverify
              </Text>
            </Link>
          </Center>
          <SearchInput />
          <ArtistsGrid artists={artists} />
        </Flex>
      ) : (
        <Flex className="flex-col mt-20">
          <Center className="">
            <Link to="/">
              <Text
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "Lexend" }}
              >
                Discoverify
              </Text>
            </Link>
          </Center>
          <SearchInput />
          <Flex className="">
            <ArtistsGrid artists={artists} />
            <TrackList artists={artists} />
          </Flex>
        </Flex>
      )}
    </div>
  );
}
