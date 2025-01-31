import useGames from "@/hook/useGames";
import { Box, GridItem, HStack, SimpleGrid, Span, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GameGridSkeleton from "./skeletons/GameGridSkeleton";
import PlatformFilter from "./PlatformFilter";
import { ImEqualizer } from "react-icons/im";


interface Props {
  selectedGenreId: number | null;
}

const GameGrid = ({ selectedGenreId }: Props) => {
  const { data, hasNextPage, fetchNextPage, isPending } =
    useGames(selectedGenreId);

  if (isPending) {
    return <GameGridSkeleton />;
  }

  const fetchedGamesLenght =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={<GameGridSkeleton />}
      dataLength={fetchedGamesLenght}
    >
      <Box padding={5}>
            <HStack width={"60%"}>
              <Text display={"flex"} gap={1} alignItems={"center"} >
              <Span color={"var(--my-pink)"} fontSize={20}>
                <ImEqualizer />
              </Span>
              Filters:
              </Text>
              <PlatformFilter />   
              <PlatformFilter />   
            </HStack>       
      </Box>
      <SimpleGrid padding={5} columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
        {data?.pages.map((page) =>
          page.results.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
