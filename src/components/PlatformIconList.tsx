import { Platform } from "@/types/Platform"
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaAndroid,
    FaApple,
    FaRegQuestionCircle 
  } from "react-icons/fa";
  import { MdPhoneIphone } from "react-icons/md";
  import { SiNintendo } from "react-icons/si";
  import { BsGlobe } from "react-icons/bs";
  import { IconType } from "react-icons";
  import { Box, Badge, Flex } from "@chakra-ui/react";
  import { Icon } from "@chakra-ui/react";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}:Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
      };

  return (
    <Flex wrap={"wrap"} gap={1} >
        {platforms.map(platform => {
            const icon = iconMap[platform.slug]
            return (
                <Badge key={platform.id}>
                    <Icon as={icon} />
                    {platform.name}
                </Badge>
            )
        })}
    </Flex>
  )
}

export default PlatformIconList