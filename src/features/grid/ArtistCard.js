import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { updateValue } from './updateSlice';

export default function ArtistCard({id, image, name, type}) {

  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(updateValue(value));
  }

  return (
    <motion.div animate={{scale: 1}} transition={{type: "just"}} initial={{scale: 0}} whileHover={{scale: 1.1}}>
      <Flex onClick={() => handleClick(name)} className=" bg-green-200 rounded border border-green-600 mt-4 mx-auto flex-col h-60 w-48 items-center overflow-hidden">
          <Image
              className="p-4"
              boxSize="150px"
              borderRadius="full"
              src={image}
            />
            <Text className=" text-center mx-4 font-mono" fontSize="lg">{name}</Text>
            <Text className=" text-center mx-4 font-mono" fontSize="smaller">{type}</Text>
      </Flex>
    </motion.div>
  )
}
