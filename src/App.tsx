// #030712 - background
// #1F2937 - card body
// #A855F7 - pink
// #111827 - header
import { Box, Grid, GridItem, Heading, } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";


function App() {
  
  return (
      <Grid
        templateColumns={{
          base: "1fr",
          md: "300px 1fr",
        }}
        bgColor={"#030712"}
        >
        <GridItem hideBelow={"md"} as={"aside"} bgColor={"#111827"}>
          <Box position={"sticky"} top={"36px"}>
            <Heading textAlign={"center"} my={"5"} as={"h2"} color={"white"}>
              Genre List
            </Heading>
            <GenreList />
          </Box>
        </GridItem>
        <GridItem>
          <GameGrid />
        </GridItem>
      </Grid>
  );
}

export default App;
