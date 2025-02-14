import { Game } from "@/types/Game";
import { Card, Button, Image, Text, Badge, Icon } from "@chakra-ui/react";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IconType } from "react-icons";
import { LuClock } from "react-icons/lu";
import { IoCalendarNumber  } from "react-icons/io5";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router";



interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const isSinglePlayer = game.tags.find((tag) => tag.id === 31);
  const isMultiPlayer = game.tags.find((tag) => tag.id === 7);
  let mode = "Not Defined";

  // object -> key:mode , value: icon
  const iconMapper:{[key:string] : IconType} = {
    "Single/Multi-player": MdPeopleAlt,
    "Single-player": IoMdPerson,
    "Multi-player": MdPeopleAlt,
  };

  if (isMultiPlayer && isSinglePlayer) {
    mode = "Single/Multi-player";
  } else if (isSinglePlayer) {
    mode = "Single-player";
  } else {
    mode = "Multi-player";
  }

  return (
    <Link to={game.slug}>
      <Card.Root bgColor={"var(--card-color)"} overflow="hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        width={"100%"}
        height={"300px"}
        objectFit={"cover"}
      />
      <Card.Body gap="2">
        <Card.Title color={"white"}>{game.name}</Card.Title>
        <Card.Description display={"flex"} gap={1} flexWrap={"wrap"}>
          {game.genres.map((genre) => (
            <Badge bgColor={"var(--my-pink)"} key={genre.id}>
          {genre.name}
            </Badge>
          ))}
        </Card.Description>
        <Text mt={2} display={"flex"} alignItems={"center"} gap={1} color={"var(--special-gray)"}>
            {iconMapper[mode] && <Icon as={iconMapper[mode]}  />}
            {mode}
        </Text>
        <Text display={"flex"} alignItems={"center"} gap={1} color={"var(--special-gray)"}>
            <Icon as={LuClock }  />
            {game.playtime}+ hours
        </Text>
        <Text display={"flex"} alignItems={"center"} gap={1} color={"var(--special-gray)"}>
            <Icon as={IoCalendarNumber   }  />
            {game.released}
        </Text>
      </Card.Body>
      <Card.Footer gap="1" flexWrap={"wrap"}>
        <PlatformIconList platforms={game.parent_platforms.map(obj => obj.platform)}  />
      </Card.Footer>
    </Card.Root>
    </Link>
  );
};

export default GameCard;
