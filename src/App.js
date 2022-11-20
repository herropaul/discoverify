import React from "react";
import { Text, Center, Heading, Link, transition } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";
import SearchInput from "../src/features/search/SearchInput";
import { Link as ReactRouterLink, Outlet } from "react-router-dom";

function App() {
  // If form is not submitted yet, display the search input
  // Else, we keep the search input display and display the Grid data with the artists
  return (
    <div
      style={{ background: "#121212" }}
      className="h-screen flex flex-col justify-center"
    >
      <main className="mt-auto mb-auto">
        {/* Animating Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            duration: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <Heading
            as="h1"
            size="3xl"
            className=" text-white text-center"
            style={{ fontFamily: "Lexend" }}
          >
            Discover your new{" "}
            <Text className="" as="span">
              artists
            </Text>{" "}
            and <Text as="span">music</Text>
          </Heading>
        </motion.div>
        <Center className="pt-4">
          <ReactRouterLink to="/">
            {/* Animating Discoverify title */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                duration: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
            >
              <Text
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "Lexend" }}
              >
                Discoverify
              </Text>
            </motion.div>
          </ReactRouterLink>
        </Center>
        {/* Animating Search Input */}
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{
            opacity: 1,
            duration: 2,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <SearchInput />
        </motion.div>
        <Outlet />
      </main>
      <footer
        className=" container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-white font-bold "
        style={{ fontFamily: "Lexend" }}
      >
        <Text>
          Built with ❤️ by{" "}
          <Link color="green.300" href="https://github.com/herropaul">
            herropaul
          </Link>
        </Text>
      </footer>
    </div>
  );
}

export default App;
