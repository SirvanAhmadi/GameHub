import useGenres from "@/hook/useGenres"
import { Box, Image,  ListItem } from "@chakra-ui/react";

const GenreList = () => {

    const {data,isError,isPending} = useGenres();

  return (
    <Box as={"ul"} paddingLeft={2} >
        {data?.results.map(genre => (
            <Box gap={2} color={"white"} mt={2} alignItems={"center"} display={"flex"} as={"li"} key={genre.id}>
                <Image src={genre.image_background} width={"40px"} height={"40px"} rounded={"xl"} />
                {genre.name}
            </Box>   
        ))}
    </Box>
  )
}

export default GenreList