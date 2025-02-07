// #030712 - background
// #1F2937 - card body
// #A855F7 - pink
// #111827 - header

import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";

function App() {
  const [selectedGenreId, setSelectedGenreID] = useState<number | null>(null);
  const [searchGames, setSearchGames] = useState("");
  

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "300px 1fr",
      }}
      bgColor={"#030712"}
    >
      <GridItem colSpan={3}>
        <Header
          onSearchInput={(value) => {
            setSearchGames(value);
          }}
        />
      </GridItem>
      <GridItem hideBelow={"md"} as={"aside"} bgColor={"#111827"}>
        <Box position={"sticky"} top={"36px"}>
          <Heading textAlign={"center"} my={"5"} as={"h2"} color={"white"}>
            Genre List
          </Heading>
          <GenreList
            onGenreClick={(genreId) => {
              setSelectedGenreID(genreId);
            }}
            selectedGenreId={selectedGenreId}
          />
        </Box>
      </GridItem>
      <GridItem>
        <GameGrid searchGames={searchGames} selectedGenreId={selectedGenreId} />
      </GridItem>
    </Grid>
  );
}

export default App;
