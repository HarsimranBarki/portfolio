import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";

const Things = () => {
  const bg = useColorModeValue(
    "lightPallete.whiteYellow",
    "darkPallete.darkPurple"
  );
  return (
    <Box bg={bg} height="100vh">
      Things
    </Box>
  );
};

export default Things;
