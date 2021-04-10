import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import HeroMe from "public/Hero.png";
import HeroMeDark from "public/HeroDark.png";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Hero = () => {
  const color = useColorModeValue(
    "lightPallete.darkRed",
    "darkPallete.veryLightTeal"
  );
  const image = useColorModeValue(HeroMe, HeroMeDark);
  return (
    <Box padding={20}>
      <Grid
        justifyContent="center"
        alignItems="center"
        templateRows="repeat(2,1fr)"
        templateColumns="1fr 150px 1fr"
        width="container.xl"
        margin="auto"
      >
        <Box>
          <Heading fontSize="7xl" fontWeight="boldest" textAlign="right">
            Harsimran
          </Heading>
          <Text
            textColor="lightPallete.darkRed"
            marginTop={10}
            paddingRight={5}
            textColor={color}
          >
            Hi!. I Like to deal with beautiful UI and convert them into
            functional & usable websites. I studied in's and out's of web
            development, accessibility, SEO and performance so you don't have
            to.
          </Text>
        </Box>
        <Box mx={-10}>
          <Image src={image} layout="intrinsic" width={222} height={539} />
        </Box>
        <Box>
          <Heading fontSize="7xl" fontWeight="boldest" textAlign="left">
            Singh Barki
          </Heading>
          <Text
            textColor="lightPallete.darkRed"
            mt={10}
            textColor={color}
            paddingLeft={5}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quis
            deleniti ullam expedita assumenda numquam illo pariatur. Soluta ea
            numquam explicabo velit, cum consequuntur debitis adipisci neque
            libero, aut consectetur. Dolorum laborum maxime, provident optio
            laboriosam sunt nam dolore, suscipit numquam sit eligendi a? Saepe
            quae qui provident libero ex est incidunt accusamus officia. Facere
            quis voluptas rem autem fuga.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
