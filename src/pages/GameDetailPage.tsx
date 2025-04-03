import { SimpleGrid, GridItem, Box, Heading, Text, Flex, Badge, Image } from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList";
import useData from "@/hook/useData";
import useGame from "@/hook/useGame";
import { useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Key } from "react";
import './GameDetailPage.css'

const GameDetailPage = () => {
    const params = useParams();
    const gameSlug = params["game-slug"] as string;
    const {data} = useGame(gameSlug);
    const {data: screenshots} = useData("/games", "/screenshots", gameSlug, 'multi');

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <SimpleGrid bgColor={"var(--card-color)"} columns={{md: 2}} as="main">
            <GridItem p={5} className="game-detail-header">
                <Box display={"flex"} flexDirection={"column"} gap={10}>
                    <Heading as={"h1"}>{data?.name}</Heading>
                    <Text lineClamp="4" dangerouslySetInnerHTML={{__html: data?.description || "Hello"}}/>
                </Box>
                <Flex gap={2} mt={4} >
                    <Badge bgColor={"var(--my-pink)"} size={"lg"}>{data?.metacritic}</Badge>
                    <Badge>{data?.released}</Badge>
                    <PlatformIconList platforms={data?.parent_platforms?.map(platform => platform.platform) || []}/>
                </Flex>
            </GridItem >
            <GridItem className="game-detail-header">
                <Image src={data?.background_image} height={"300px"}/>
            </GridItem>
            <GridItem colSpan={2}>
                <Slider {...sliderSettings}
                className="game-detail-slider">
                    {screenshots?.results?.map((screenshot: { id: Key | null | undefined; image: string | undefined; }) => (
                        <div key={screenshot.id}>
                            <Image src={screenshot.image} />
                        </div>
                    ))}
                </Slider>
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;
