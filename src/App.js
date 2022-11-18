import React from "react";
import { Text, Center, Heading, Link } from "@chakra-ui/react";
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
        <Heading
          as="h1"
          size="3xl"
          className=" text-white text-center"
          style={{ fontFamily: "Lexend" }}
        >
          Discover your new artists and music
        </Heading>
        <Center className="pt-4">
          <ReactRouterLink to="/">
            <Text
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "Lexend" }}
            >
              Discoverify
            </Text>
          </ReactRouterLink>
        </Center>
        <SearchInput />
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
