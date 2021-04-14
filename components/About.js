import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { MdMail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const bg = useColorModeValue("lightPallete.white", "darkPallete.blackPurple");
  const color = useColorModeValue("lightPallete.red", "white");
  const colorResume = useColorModeValue(
    "lightPallete.darkRed",
    "darkPallete.veryLightTeal"
  );
  const colorLink = useColorModeValue("lightPallete.red", "darkPallete.teal");
  const MotionListItem = motion(ListItem);
  return (
    <>
      <Box bg={bg} padding={{ base: 10, md: 10, lg: 20 }} name="about">
        <Flex
          justifyContent="space-around"
          direction={{ base: "column", md: "row" }}
        >
          <Box mb={10}>
            <Heading fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}>
              Reach Me Out!
            </Heading>
            <Text textColor={colorResume} mt={2}>
              Here For Hiring? Download My Resume Below
            </Text>
            <a href="/Resume2021.pdf" downlaod="true" target="_blank">
              <Button mt={5} colorScheme="red" rounded="full">
                Resume
              </Button>
            </a>
          </Box>
          <Box>
            <Heading>Contact</Heading>
            <List spacing={5} mt={5} textColor={colorLink}>
              <MotionListItem
                initial={{
                  x: 0,
                }}
                whileHover={{
                  x: 5,
                }}
                alignItems="center"
                display="flex"
                as={Link}
                href="mailto:harsimransinghbarki@gmail.com"
                isExternal
              >
                <ListIcon as={MdMail} color={colorLink} />
                Email
              </MotionListItem>
              <MotionListItem
                initial={{
                  x: 0,
                }}
                whileHover={{
                  x: 5,
                }}
                alignItems="center"
                display="flex"
                as={Link}
                href="https://www.linkedin.com/in/harsimran-singh-05384a175/"
                isExternal
              >
                <ListIcon as={FaLinkedin} color={colorLink} />
                LinkedIn
              </MotionListItem>
              <MotionListItem
                initial={{
                  x: 0,
                }}
                whileHover={{
                  x: 5,
                }}
                alignItems="center"
                display="flex"
                as={Link}
                href="https://github.com/HarsimranBarki"
                isExternal
              >
                <ListIcon as={FaGithub} color={colorLink} />
                GitHub
              </MotionListItem>
              <MotionListItem
                initial={{
                  x: 0,
                }}
                whileHover={{
                  x: 5,
                }}
                alignItems="center"
                display="flex"
                as={Link}
                href="https://www.instagram.com/harsimransinghb/"
                isExternal
              >
                <ListIcon as={FaInstagramSquare} color={colorLink} />
                Instagram
              </MotionListItem>
            </List>
          </Box>
        </Flex>
      </Box>
      <Box padding={3} bg={bg}>
        <Text textAlign="center">
          Made with love in 🇮🇳 by Harsimran Singh Barki
        </Text>
      </Box>
    </>
  );
};

export default About;
