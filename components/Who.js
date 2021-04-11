import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";

const Who = () => {
  const bg = useColorModeValue(
    "lightPallete.lightestYellow",
    "darkPallete.darkPurple"
  );
  return (
    <Box bg={bg} height="100vh">
      who
    </Box>
  );
};

export default Who;
