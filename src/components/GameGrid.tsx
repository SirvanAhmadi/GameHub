import useGames from "@/hook/useGames";
import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Span,
  Text,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GameGridSkeleton from "./skeletons/GameGridSkeleton";
import MySelect from "./MySelect";
import { ImEqualizer } from "react-icons/im";
import usePlatforms from "@/hook/usePlatforms";
import useGameQueryStore from "@/store";



const GameGrid = () => {

  const {selectedGenreId,searchGames,orderBy,selectedPlatformId} = useGameQueryStore();

  const setOrderBy = useGameQueryStore((state) => state.setOrderBy)
  const setSelectedPlatformId = useGameQueryStore((state) => state.setSelectedPlatformId)

  const { data, hasNextPage, fetchNextPage, isPending } = useGames(
    selectedGenreId,
    selectedPlatformId,
    orderBy,
    searchGames
  );



  const { data: platforms } = usePlatforms();
  const platformFilters =
    platforms?.results.map((platform) => ({
      label: platform.name,
      value: platform.id,
    })) || [];
  const orderFilter = [
    { label: "Most Recent", value: "-released" },
    { label: "Oldest", value: "released" },
  ];

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
          <Text display={"flex"} gap={1} alignItems={"center"}>
            <Span color={"var(--my-pink)"} fontSize={20}>
              <ImEqualizer />
            </Span>
            Filters:
          </Text>
          <MySelect
            onSelectChange={(value) => {
              setSelectedPlatformId(value as string)
            }}
            seletedValue={selectedPlatformId}
            placeholder="Select Platform"
            data={platformFilters}
          />
          <MySelect
            seletedValue={orderBy}
            onSelectChange={(value) => {
              setOrderBy(value as string)
            }}
            placeholder="Order By"
            data={orderFilter}
          />
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
