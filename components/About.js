import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";

const About = () => {
  const bg = useColorModeValue("lightPallete.white", "darkPallete.blackPurple");
  return (
    <Box bg={bg} height="100vh">
      About
    </Box>
  );
};

export default About;
