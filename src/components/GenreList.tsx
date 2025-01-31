import useGenres from "@/hook/useGenres";
import { Box, Button, HStack, Image, Text, VStack} from "@chakra-ui/react";
import GenreListSkeleton from "./skeletons/GenreListSkeleton";
import { RiSignalWifiErrorFill } from "react-icons/ri";


interface Props {
  selectedGenreId:number | null;
  onGenreClick: (genreId:number) => void;
}

const GenreList = ({selectedGenreId,onGenreClick}:Props) => {
  
  const { data, isPending, isError } = useGenres();

  if (isPending) {
    return <GenreListSkeleton />
  }
  
  if (isError) {
    return <GenreListError />
  }

  return (
    <Box as={"ul"} paddingLeft={2}>
      {data?.results.map((genre) => (
        <Box
          cursor={"pointer"}
          gap={2}
          onClick={() => {
            onGenreClick(genre.id)
          }}
          color={"white"}
          mt={2}
          alignItems={"center"}
          display={"flex"}
          as={"li"}
          key={genre.id}

          fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
        >
          <Image
            src={genre.image_background}
            width={"40px"}
            height={"40px"}
            rounded={"xl"}
          />
          {genre.name}
        </Box>
      ))}
    </Box>
  );
};


const GenreListError = () => {
  return (
    <VStack >
      <Text fontSize={40}>
      <RiSignalWifiErrorFill  />
      </Text>
      <Text>
        Something Went Wrong!
      </Text>
      <Button onClick={() => {
        location.reload()
      }}>
        Try Again
      </Button>
    </VStack>
  )
}

export default GenreList;
