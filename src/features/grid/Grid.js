import React from "react";
import { Flex, Image, Text, Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Grid() {
  const artists = useSelector((state) => state.artistsSlice.artists);
  const mainArtist = artists[0]; // Artist object

  return (
    <Container maxH="lg" bg="blue.100" alignItems="center">
      {artists.length ? (
        <Flex flexDir="column">
          <Image
            boxSize="150px"
            borderRadius="full"
            src={mainArtist.images[0].url}
          />
          <Text fontSize="3xl">{mainArtist.name}</Text>
        </Flex>
      ) : (
        <Flex className="text-3xl font-bold">No worky</Flex>
      )}
    </Container>
  );
}
