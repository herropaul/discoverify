import React from 'react'
import { Flex, Box, Image, Text, Container } from "@chakra-ui/react";

export default function ArtistCard({id, image, name, type}) {
  return (
    <Flex className=" bg-green-200 rounded border border-green-600 mt-4 mx-auto flex-col h-64 w-48 items-center overflow-hidden">
        <Image
            className="p-4"
            boxSize="150px"
            borderRadius="full"
            src={image}
          />
          <Text className=" text-center mx-4 font-mono" fontSize="md">{name}</Text>
          <Text className=" text-center mx-4 font-mono" fontSize="smaller">{type}</Text>
    </Flex>
  )
}
