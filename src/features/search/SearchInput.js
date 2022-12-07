import { Input, Flex, FormControl, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";
import { getArtistByQuery } from "./searchArtistsSlice";
import { searchArtists } from "./searchSlice";
import "./SearchInput.css";
import SearchResults from "./SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(true);
  // artists is our lists we get when we dispatch a search query
  const { onChangeArtists, loading, error } = useSelector(
    (state) => state.searchSlice
  );
  //console.log("Current state: ", visible);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const delayedQuery = useCallback(
    debounce((q) => dispatch(searchArtists(q)), 1000, [])
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    if (query === "") {
      e.preventDefault();
    } else {
      e.preventDefault();
      dispatch(getArtistByQuery(query));
      navigate(`/results/${query}`);
    }
  };

  const updateSearchInput = (name) => {
    setQuery(name);
    setVisible(false);
    //console.log("Clicked: ", visible);
  };

  return (
    <Flex textAlign="center" m={0}>
      <form className="flex-col" onSubmit={handleSubmit}>
        <FormControl className=" flex flex-row">
          <Input
            color="white"
            borderColor="#07d88c"
            mb={5}
            type="text"
            onChange={handleChange}
            value={query}
            placeholder="Enter artist"
            _placeholder={{ opacity: 1, color: "white" }}
            size="md"
          />
          <Button
            mx={1}
            colorScheme="green"
            leftIcon={<SearchIcon />}
            type="submit"
          >
            Search
          </Button>
        </FormControl>
        {query !== "" && (
          <div>
            {!loading ? (
              <div>
                {visible && (
                  <Flex
                    className=" flex-col absolute translate-y-1 bg-slate-700 shadow rounded-md h-60 w-60 lg:h-72"
                    overflowY="auto"
                  >
                    {onChangeArtists.map((artist) => (
                      <SearchResults
                        onClick={updateSearchInput}
                        artist={artist}
                        key={artist.id}
                      />
                    ))}
                  </Flex>
                )}
              </div>
            ) : (
              <Text
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Lexend" }}
              >
                Loading...
              </Text>
            )}
          </div>
        )}
      </form>
    </Flex>
  );
}
