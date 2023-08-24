import React from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillWindows, AiFillApple, AiFillAndroid } from "react-icons/ai";
import { BsPlaystation, BsXbox, BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinux, FaGlobeAmericas } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: AiFillWindows,
    mac: AiFillApple,
    android: AiFillAndroid,
    playstation: BsPlaystation,
    xbox: BsXbox,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: FaGlobeAmericas,
  };

  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return <Icon as={IconComponent} key={platform.slug} color="gray.500" />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
