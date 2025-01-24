

// #030712 - background
// #1F2937 - card body
// #A855F7 - pink
// #111827 - header

import { Grid, GridItem, Heading } from "@chakra-ui/react"
import Header from "./components/Header"
import GenreList from "./components/GenreList"

function App() {

  return (
    <Grid columns={{base:1,md:3}} bgColor={"#030712"}>
      <GridItem colSpan={3}>
        <Header />
      </GridItem>
      <GridItem colSpan={1} as={"aside"} bgColor={"#111827"}>
        <Heading textAlign={"center"} my={"5"} as={"h2"} color={"white"}>
            Genre List
        </Heading>
          <GenreList />
      </GridItem>
      <GridItem colSpan={2}>
          
      </GridItem>
    </Grid>
  )
}

export default App
