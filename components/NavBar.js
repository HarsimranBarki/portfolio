import { Button, ButtonGroup } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, HStack } from "@chakra-ui/layout";
import React from "react";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("lightPallete.yellow", "darkPallete.teal");
  const color = useColorModeValue("white", "gray.800");
  return (
    <Flex justifyContent="flex-end" padding={8} maxW="90vw" alignItems="center">
      <HStack spacing={10}>
        <ButtonGroup spacing={10} variant="ghost">
          <Button
            _hover={{
              bg,
            }}
          >
            About
          </Button>
          <Button
            _hover={{
              bg,
            }}
          >
            Projects
          </Button>
          <Button
            _hover={{
              bg,
            }}
          >
            Contact
          </Button>
          <Button
            onClick={toggleColorMode}
            _hover={{
              bg,
            }}
          >
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </ButtonGroup>
      </HStack>

      {/* Mobile Nav */}
      <HamburgerIcon />
    </Flex>
  );
}

export default NavBar;
