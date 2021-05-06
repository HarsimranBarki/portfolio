import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  LinkBox,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import WhoWhite from "public/Who.svg";
import WhoDark from "public/WhoDark.svg";
import { useInView } from "react-intersection-observer";

import {
  DiReact,
  DiHtml5,
  DiCss3Full,
  DiJavascript,
  DiRubyRough,
} from "react-icons/di";
import { FaKeyboard, FaMouse } from "react-icons/fa";
import {
  SiFirebase,
  SiPostgresql,
  SiNextDotJs,
  SiNodeDotJs,
  SiMaterialdesignicons,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  SiReact,
  SiServerless,
} from "react-icons/si";
import { MdLaptop } from "react-icons/md";
import { motion } from "framer-motion";
import { GiProcessor } from "react-icons/gi";

const Who = () => {
  const bg = useColorModeValue(
    "lightPallete.lightestYellow",
    "darkPallete.lightPurple"
  );
  const color = useColorModeValue(
    "lightPallete.darkRed",
    "darkPallete.veryLightTeal"
  );

  const colorTimeline = useColorModeValue(
    "lightPallete.red",
    "darkPallete.teal"
  );
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const MotionListItem = motion(ListItem);
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);
  const image = useColorModeValue(WhoDark, WhoWhite);

  return (
    <Box bg={bg} name="who">
      <Grid
        placeItems="center"
        gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "40% 1fr" }}
        height={{ base: "100%", md: "100vh", lg: "100vh" }}
        px={{ base: 5, md: 10, lg: 10 }}
        py={{ base: 10, md: 10, lg: 10 }}
        maxWidth="container.xl"
        flexDirection="column-reverse"
        margin="auto"
        gridGap={10}
      >
        <MotionBox display={{ base: "none", md: "none", lg: "block" }}>
          <Image src={image} layout="intrinsic" height={500} width={300} />
        </MotionBox>
        <Stack spacing={10}>
          <MotionHeading
            fontSize={{ base: "3xl", md: "6xl" }}
            textAlign="center"
          >
            Harsimran. Who?
          </MotionHeading>
          <Text textColor={color} cursor="normal">
            I am a Front-End Engineer. I have put days and hours learning
            Software Development. Have good and hands-on experience with Web
            Applications and programming languages. Have a strong understanding
            of UI complexity, cross-browser compatibility and general web
            functions and standard. Apart from software development I am really
            into music production and have created a few sounds of my own.
          </Text>
          <Flex
            justifyContent="space-between"
            cursor="default"
            textColor={colorTimeline}
            flexWrap="wrap"
          >
            <Box mb={5}>
              <Text fontStyle="italic" textDecoration="underline">
                Things i know
              </Text>
              <List spacing={3} marginTop={5}>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                  whileHover={{
                    x: 5,
                  }}
                >
                  <ListIcon as={SiReact} color={colorTimeline} />
                  React JS
                </MotionListItem>

                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiNextDotJs} color={colorTimeline} />
                  Next JS
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiHtml5} color={colorTimeline} />
                  HTML
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiCss3Full} color={colorTimeline} />
                  CSS
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiJavascript} color={colorTimeline} />
                  JavaScript
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiRubyRough} color={colorTimeline} />
                  Ruby On Rails
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiFirebase} color={colorTimeline} />
                  Firebase
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiPostgresql} color={colorTimeline} />
                  PostgresSQL
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiTailwindcss} color={colorTimeline} />
                  Tailwind CSS
                </MotionListItem>
              </List>
            </Box>
            <Box>
              <Text fontStyle="italic" textDecoration="underline">
                Things in progress
              </Text>
              <List spacing={3} marginTop={5}>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiNodeDotJs} color={colorTimeline} />
                  Node JS
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiMaterialdesignicons} color={colorTimeline} />
                  System Design
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiTypescript} color={colorTimeline} />
                  TypeScript
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiGraphql} color={colorTimeline} />
                  GraphQL
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiServerless} color={colorTimeline} />
                  Web Server
                </MotionListItem>
              </List>
            </Box>
            <Box>
              <Text textDecoration="underline" fontStyle="italic">
                My Setup
              </Text>
              <List spacing={3} marginTop={5}>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={MdLaptop} color={colorTimeline} />
                  Asus S15
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={GiProcessor} color={colorTimeline} />
                  Intel i7 8th & 16GB Ram
                </MotionListItem>

                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={FaKeyboard} color={colorTimeline} />
                  Skyloong SK64 (Yellow Optical)
                </MotionListItem>
                <MotionListItem
                  _hover={{
                    textDecoration: "underline",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={FaMouse} color={colorTimeline} />
                  Logitech G402
                </MotionListItem>
              </List>
            </Box>
          </Flex>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Who;
