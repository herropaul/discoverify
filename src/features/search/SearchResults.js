import { Image, Link, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function SearchResults({ onClick, artist }) {
  const handleClick = () => {
    const name = artist.name;
    onClick(name);
  };

  return (
    <Flex
      onClick={handleClick}
      className=" w-full my-1 items-center hover:bg-slate-500 "
    >
      <Link>
        {!artist.images.length ? (
          <Flex>
            <Image
              className="p-4"
              boxSize="60px"
              borderRadius="full"
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            />
            <Text
              className=" text-sm text-white my-auto"
              style={{ fontFamily: "Lexend" }}
            >
              {artist.name}
            </Text>
          </Flex>
        ) : (
          <Flex>
            <Image
              className="p-4"
              boxSize="60px"
              borderRadius="full"
              src={artist.images[0].url}
            />
            <Text
              className=" text-sm text-white my-auto"
              style={{ fontFamily: "Lexend" }}
            >
              {artist.name}
            </Text>
          </Flex>
        )}
      </Link>
    </Flex>
  );
}
