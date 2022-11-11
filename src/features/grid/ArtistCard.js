import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { updateValue } from './updateSlice';
import { getTrackById } from './trackSlice';
import { Palette } from 'react-palette';

export default function ArtistCard({id, image, name, type}) {

  const dispatch = useDispatch();

  const handleClick = (value) => {
    //dispatch(updateValue(value));
    dispatch(getTrackById(value));
  }

  return (
    <motion.div animate={{scale: 1}} transition={{type: "just"}} initial={{scale: 0}} whileHover={{scale: 1.1}}>
      <Palette src={image}>
      {({data, loading, error}) => (
        <Flex onClick={() => handleClick({artistID: id, countryID: "US"})} style={{backgroundColor: data.lightVibrant}} className="rounded border mt-4 mx-auto flex-col h-60 w-48 items-center overflow-hidden">
          <Image
              className="p-4"
              boxSize="150px"
              borderRadius="full"
              src={image}
          />
          <Text className=" text-center mx-4 font-mono" fontSize="lg">{name}</Text>
          <Text className=" text-center mx-4 font-mono" fontSize="smaller">{type}</Text>
       </Flex>
      )}
      </Palette>
    </motion.div>
  )
}
