import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { SplitText } from "./SplitText";
import { FaSpotify, FaCheckCircle } from "react-icons/fa";
import TopTracks from "./TopTracks";
import HeroMe from "public/Hero.png";
import HeroMeDark from "public/HeroDark.png";
import Image from "next/image";
import HeroScroll from "public/HeroScroll.png";
import { motion } from "framer-motion";
const HeroMobile = () => {
  const color = useColorModeValue(
    "lightPallete.darkRed",
    "darkPallete.veryLightTeal"
  );
  const colorTimeline = useColorModeValue(
    "lightPallete.red",
    "darkPallete.teal"
  );
  const image = useColorModeValue(HeroMe, HeroMeDark);
  return (
    <Grid
      placeItems="center"
      padding={{ base: 5, md: 10, lg: 10 }}
      height="100vh"
      gridGap={{ base: 2, md: 10, lg: 10 }}
    >
      <Heading textAlign="center" mt={10}>
        <SplitText
          initial={{ y: "100%", x: 0 }}
          animate="visible"
          variants={{
            visible: (i) => ({
              y: 0,
              originY: 0,

              transition: {
                delay: i * 0.1,
              },
            }),
          }}
        >
          Harsimran Singh Barki
        </SplitText>
      </Heading>
      <Text textColor={color} justifySelf="center" textAlign="center">
        Hi!. I Like to deal with beautiful UI and convert them into - functional
        & usable websites. I studied in's and out's of web - development,
        accessibility, SEO and performance so you don't have - to.
      </Text>

      <Box textColor={colorTimeline} justifySelf="center">
        <List spacing={3}>
          <ListItem alignItems="center" display="flex">
            <ListIcon as={FaSpotify} color="green.500" />
            Listening - {""}
            <TopTracks />
          </ListItem>
          <ListItem alignItems="center" display="flex">
            <ListIcon as={FaCheckCircle} color="green.500" /> 2021 Jan - First
            Freelance Project
          </ListItem>
          <ListItem alignItems="center" display="flex">
            <ListIcon as={FaCheckCircle} color="green.500" />
            2019 Apr - First Full Time Job
          </ListItem>
          <ListItem alignItems="center" display="flex">
            <ListIcon as={FaCheckCircle} color="green.500" />
            2019 Feb - Started as a intern
          </ListItem>
        </List>
      </Box>
      <Flex
        alignItems="base"
        justifyContent="center"
        width="90vw"
        marginTop={20}
        cursor="pointer"
      >
        <Text mr={5}>scroll</Text>
        <motion.div
          whileHover={{
            y: 10,
          }}
        >
          <Image src={HeroScroll} layout="intrinsic" height={30} width={15} />
        </motion.div>
      </Flex>
    </Grid>
  );
};

export default HeroMobile;
