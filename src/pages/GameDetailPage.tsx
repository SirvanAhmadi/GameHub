import PlatformIconList from "@/components/PlatformIconList"
import useData from "@/hook/useData"
import useGame from "@/hook/useGame"
import { Badge, Box, Flex, GridItem, Heading,Image,SimpleGrid,Text } from "@chakra-ui/react"
import { useParams } from "react-router"

const GameDetailPage = () => {

    const params = useParams()
    const gameSlug = params["game-slug"] as string
   const {data} =  useGame(gameSlug)

   const {data:screenshots} = useData("/games","/screenshots",gameSlug,'multi')
    
   
   

  return (
    <SimpleGrid bgColor={"var(--card-color)"} columns={{md:2}} as="main">
        <GridItem p={5}>
            <Box display={"flex"} flexDirection={"column"}  gap={10}>
            <Heading as={"h1"}>
                {data?.name}
            </Heading>
            <Text lineClamp="4" dangerouslySetInnerHTML={{__html:data?.description || "Hello"}}>
                
            </Text>
            </Box>
            <Flex gap={2} mt={4} >
                <Badge bgColor={"var(--my-pink)"} size={"lg"}>
                    {data?.metacritic}
                </Badge>
                <Badge>
                    {data?.released}
                </Badge>
                <PlatformIconList platforms={data?.parent_platforms.map(platform => platform.platform) || []} />
            </Flex>
        </GridItem>
        <GridItem>
            <Image src={data?.background_image} height={"300p"} />
        </GridItem>
            {screenshots && screenshots.results.map(screenshot => (
                <GridItem>
                    <Image src={screenshot.image}  />
                </GridItem>
            ))}
    </SimpleGrid>
  )
}

export default GameDetailPage