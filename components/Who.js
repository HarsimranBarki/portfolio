import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import WhoWhite from "public/Who.png";
import WhoDark from "public/WhoDark.png";
import { useInView } from "react-intersection-observer";

import {
  DiReact,
  DiHtml5,
  DiCss3Full,
  DiJavascript,
  DiRubyRough,
} from "react-icons/di";
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
import { motion } from "framer-motion";

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
  const image = useColorModeValue(WhoDark, WhoWhite);

  return (
    <Box bg={bg} height="100vh">
      <Grid
        placeItems="center"
        gridTemplateColumns="30% 1fr"
        height="100%"
        width="container.xl"
        margin="auto"
      >
        <motion.div ref={ref} animate={{ opacity: inView ? 1 : 0 }}>
          <Image src={image} layout="intrinsic" height={500} width={300} />
        </motion.div>
        <Stack spacing={10} px={35}>
          <MotionHeading
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            fontSize="6xl"
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
          >
            <Box>
              <Text fontStyle="italic">Things i know</Text>
              <List spacing={3} marginTop={5}>
                <MotionListItem
                  alignItems="center"
                  display="flex"
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                >
                  <ListIcon as={SiReact} color={colorTimeline} />
                  React JS
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiNextDotJs} color={colorTimeline} />
                  Next JS
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiHtml5} color={colorTimeline} />
                  HTML
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiCss3Full} color={colorTimeline} />
                  CSS
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiJavascript} color={colorTimeline} />
                  JavaScript
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={DiRubyRough} color={colorTimeline} />
                  Ruby On Rails
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiFirebase} color={colorTimeline} />
                  Firebase
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiPostgresql} color={colorTimeline} />
                  PostgresSQL
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
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
              <Text fontStyle="italic">Things in progress</Text>
              <List spacing={3} marginTop={5}>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiNodeDotJs} color={colorTimeline} />
                  Node JS
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiMaterialdesignicons} color={colorTimeline} />
                  System Design
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiTypescript} color={colorTimeline} />
                  TypeScript
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiGraphql} color={colorTimeline} />
                  GraphQL
                </MotionListItem>
                <MotionListItem
                  whileHover={{
                    x: 5,
                    textDecoration: "underline",
                  }}
                  alignItems="center"
                  display="flex"
                >
                  <ListIcon as={SiServerless} color={colorTimeline} />
                  Web Server
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
