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
import Image from "next/image";
import HeroMe from "public/Hero.png";
import HeroMeDark from "public/HeroDark.png";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FaSpotify, FaCheckCircle } from "react-icons/fa";
import TopTracks from "./TopTracks";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "./SplitText";
import HeroScroll from "public/HeroScroll.png";

const Hero = () => {
  const color = useColorModeValue(
    "lightPallete.darkRed",
    "darkPallete.veryLightTeal"
  );
  const colorTimeline = useColorModeValue(
    "lightPallete.red",
    "darkPallete.teal"
  );
  const image = useColorModeValue(HeroMe, HeroMeDark);
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);

  return (
    <Box height="100vh" position="relative">
      <Grid
        gridTemplateColumns="1fr 200px 1fr"
        gridGap="0px 0px"
        gridTemplateAreas="'firstName Image lastName ''leftText Image rightText '"
        margin="auto"
        placeItems="center"
        maxW="container.xl"
        height="100%"
      >
        <MotionBox gridArea="Image">
          <AnimatePresence
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
          >
            <Image src={image} layout="intrinsic" height={500} width={200} />
          </AnimatePresence>
        </MotionBox>
        <Heading
          gridArea="firstName"
          fontSize="7xl"
          alignSelf="flex-end"
          justifySelf="flex-end"
          cursor="default"
          mr={-5}
        >
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
            Harsimran
          </SplitText>
        </Heading>

        <Text
          gridArea="leftText"
          textColor={color}
          width="24rem"
          justifySelf="flex-end"
        >
          Hi!. I Like to deal with beautiful UI and convert them into -
          functional & usable websites. I studied in's and out's of web -
          development, accessibility, SEO and performance so you don't have -
          to.
        </Text>
        <Heading
          gridArea="lastName"
          fontSize="7xl"
          alignSelf="flex-end"
          justifySelf="flex-start"
          display="inline-block"
          cursor="default"
          ml={-5}
        >
          <SplitText
            initial={{ y: "100%", x: 0 }}
            animate="visible"
            variants={{
              delay: 0.2,
              visible: (i) => ({
                y: 0,
                originY: 0,

                transition: {
                  delay: i * 0.1,
                },
              }),
            }}
          >
            Singh Barki
          </SplitText>
        </Heading>

        <Box
          gridArea="rightText"
          textColor={colorTimeline}
          width="22rem"
          justifySelf="center"
        >
          <List spacing={3}>
            <ListItem alignItems="center" display="flex">
              <ListIcon as={FaSpotify} color="green.500" />
              Spotify - {""}
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
      </Grid>
      <Flex
        alignItems="base"
        justifyContent="flex-end"
        width="90vw"
        marginTop={20}
        cursor="pointer"
        position="absolute"
        bottom="10"
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
    </Box>
  );
};

export default Hero;
