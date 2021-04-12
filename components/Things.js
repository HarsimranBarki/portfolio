import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/button";
import rb from "public/rb.png";
const Things = () => {
  const bg = useColorModeValue(
    "lightPallete.whiteYellow",
    "darkPallete.darkPurple"
  );

  const cardBg = useColorModeValue(
    "lightPallete.white",
    "darkPallete.lightTeal"
  );
  const cardColor = useColorModeValue(
    "lightPallete.white",
    "darkPallete.veryDarkPurple"
  );
  const cardButton = useColorModeValue(
    "lightPallete.red",
    "darkPallete.veryLightTeal"
  );

  const projects = {
    website: [
      {
        name: "Royal Brothers",
        desc:
          "Bike Rental Company. Rebuilt entire UI to a new design which is more modern and fresh.",
        link: "https://localhost:3000",
      },
      {
        name: "Athayog Living",
        desc:
          "Elevate your Yogic practice by instilling transformation with a strong hold on your lifestyle.",
        link: "https://localhost:3000",
      },
      {
        name: "Simple Pomodoro",
        desc:
          "Elevate your Yogic practice by instilling transformation with a strong hold on your lifestyle.",
        link: "https://localhost:3000",
      },
      {
        name: "Other Project",
        desc:
          "Elevate your Yogic practice by instilling transformation with a strong hold on your lifestyle.",
        link: "https://localhost:3000",
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
              bg={cardBg}
              justifySelf="center"
              direction="column"
              justifyContent="space-between"
              alignSelf="center"
              textColor="black"
              height="100%"
              boxShadow="md"
              padding={{ base: 5, md: 10, lg: 10 }}
              zIndex={10}
              textColor="black"
            >
              <Text fontWeight="medium" fontSize={{ base: "2xl", md: "3xl" }}>
                {data.name}
              </Text>
              <Text mt={5}>{data.desc}</Text>
              <Link href={data.link} passHref>
                <Button mt={5} bg={cardButton}>
                  Visit Website
                </Button>
              </Link>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Things;
