import { Input, Flex, FormControl, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { getArtistByQuery } from "./searchSlice";
import "./SearchInput.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateValue } from "../grid/updateSlice";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    if (query === "") {
      navigate("/");
    } else {
      e.preventDefault();
      dispatch(getArtistByQuery(query));
      //dispatch(getTrackByQuery(query));
      navigate("/results");
    }
  };

  return (
    <Flex textAlign="center" m={0}>
      <form onSubmit={handleSubmit}>
        <FormControl className=" flex flex-row">
          <Input
            color="white"
            borderColor="#07d88c"
            mb={5}
            type="text"
            onChange={handleChange}
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
      </form>
    </Flex>
  );
}
