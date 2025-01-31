import { HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

const GameGridSkeleton = () => {

  const list = [1,2,3,4,5,6]

  return (
    <SimpleGrid padding={5} columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
      {list.map(value => (
        <Stack  key={value} gap="6">
        <Skeleton bgColor={"var(--card-color)"} rounded={"xl"} height="200px" />
        <HStack width="full">
          <SkeletonText bgColor={"var(--card-color)"} noOfLines={3} gap="4" />
        </HStack>
      </Stack>
      ))}
    </SimpleGrid>
  );
};

export default GameGridSkeleton;
