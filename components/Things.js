import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

import { Button } from "@chakra-ui/button";
import rb from "public/rb.png";
import rbLogo from "public/rbLogo.png";
import athayog from "public/athayog.png";
import athayogLogo from "public/athayogLogo.png";
import templates from "public/templates.png";
import { motion } from "framer-motion";
const Things = () => {
  const bg = useColorModeValue(
    "lightPallete.whiteYellow",
    "darkPallete.darkPurple"
  );

  const cardBg = useColorModeValue(
    "lightPallete.white",
    "darkPallete.lightPurple"
  );
  const cardColor = useColorModeValue("lightPallete.black", "black");
  const cardBorder = useColorModeValue("gray.200", "gray.500");
  const cardButton = useColorModeValue("gray.600", "darkPallete.teal");

  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const projects = {
    website: [
      {
        id: "011212",
        name: "Athayog Living",
        desc:
          "Built the entire website architecture from Front-End to Back-End to help them increase their customer base & sell their courses",
        link: "https://athayogliving.com/",
        image: athayog,
        gradient: "rgba(132, 152, 109, 0.8),rgba(173, 220, 188, 1)",
      },
      {
        id: "011999",
        name: "Royal Brothers",
        desc:
          "Revamped Website UI to a newer modern design for better customer retention with SEO boost",
        link: "https://royalbrothers.com",
        image: rb,
        gradient: "rgba(254, 210, 80, 0.8),rgba(254, 210, 80, 1)",
      },
      {
        id: "014343",
        name: "Theme Collection",
        desc:
          "A collection of my HTML & CSS Design Templates built with various tech stack",
        link: "https://github.com/HarsimranBarki/theme-collection",
        image: templates,
        gradient: "rgba(255, 192, 203, 0.8),rgba(255, 192, 203, 1)",
      },
    ],
  };

  return (
    <Box
      bg={bg}
      padding={{ base: 10, md: 10, lg: 20 }}
      textAlign="center"
      name="projects"
    >
      <Heading>Things I Did</Heading>
      <Text mt={5}>
        Here are a few design projects I've worked on recently.
      </Text>
      <Grid
        placeItems="center"
        height="100%"
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(18rem, 1fr))",
          md: "repeat(auto-fill, minmax(25rem, 1fr))",
          lg: "repeat(auto-fill, minmax(25rem, 1fr))",
        }}
        gridGap={5}
        justifyContent="center"
        alignItems="center"
        placeContent="center"
        margin="auto"
        textAlign="center"
        margin={{ base: "0 0 ", md: "0 0", lg: "0 10rem" }}
        mt={{ base: 10, md: 15, lg: 20 }}
      >
        {projects.website.map((data) => {
          return (
            <Flex
              position="relative"
              rounded="lg"
              overflow="hidden"
              justifySelf="center"
              direction="column"
              justifyContent="space-between"
              key={data.id}
              alignSelf="center"
              textColor="black"
              height="100%"
              textColor={cardColor}
              padding={{ base: 5, md: 10, lg: 10 }}
              zIndex={10}
              border="1px solid"
              borderColor={cardBorder}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="center"
              style={{
                backgroundImage: `linear-gradient(${data.gradient} ),url(${data.image})`,
              }}
            >
              <MotionText
                fontWeight="medium"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                {data.name}
              </MotionText>
              <motion.div
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <MotionText cursor="default" mt={5}>
                  {data.desc}
                </MotionText>

                <Link href={data.link} passHref>
                  <MotionButton mt={5} colorScheme="blackAlpha">
                    Visit Website
                  </MotionButton>
                </Link>
              </motion.div>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Things;
