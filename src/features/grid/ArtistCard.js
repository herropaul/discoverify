import React from 'react'
import { Flex, Image, Text, Container } from "@chakra-ui/react";

export default function ArtistCard({image, name}) {
  return (
    <Flex className=" bg-green-200 rounded mt-4">
        <Image
            className="p-4"
            boxSize="150px"
            borderRadius="full"
            src={image}
          />
          <Text className=" text-center py-11 mx-4" fontSize="3xl">{name}</Text>
    </Flex>
  )
}
