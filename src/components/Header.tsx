import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { LuTowerControl } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { FaSearch } from "react-icons/fa";
import { ColorModeButton } from "./ui/color-mode";
import useGameQueryStore from "@/store";


const Header = () => {

  const setSearchGames = useGameQueryStore((state) => state.setSearchGames)

  return (
    <Box py={4} as={"header"} bgColor={"#111827"} display={"flex"}>
      <Box width={"20%"} paddingLeft={3} display={"flex"} alignItems={"center"}>
        <Text fontSize={"4xl"} color={"#A855F7"}>
          <LuTowerControl />
        </Text>
        <Heading as={"h2"} color={"white"}>
          GameHub
        </Heading>
      </Box>
      <Box width={"70%"}>
        <InputGroup width={"80%"} flex="1" startElement={<FaSearch />}>
          <Input
            border={0}
            onChange={(event) => {
              setSearchGames(event.target.value)
            }}
            bgColor={"#1F2937"}
            rounded={"full"}
            className="custom-input"
            placeholder="Search Game"
          />
        </InputGroup>
      </Box>
      <Box width={"10%"} color={"white"}>
        <ColorModeButton color={"white"} />
      </Box>
    </Box>
  );
};

export default Header;
