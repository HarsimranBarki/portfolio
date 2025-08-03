"use client";

import {
  Box,
  Flex,
  Burger,
  Drawer,
  Group,
  Text,
  Stack,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      <Flex
        p="md"
        justify="space-between"
        align="center"
        px="xl"
        bg="white"
        style={{ borderBottom: "1px solid #eee" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          <Text fw="bold" size="lg">
            HSB
          </Text>
        </Link>

        {/* Desktop Links */}
        <Group gap="md" visibleFrom="sm">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#e64f57" : "#000",
                  fontWeight: "bold",
                  borderBottom: isActive
                    ? "2px solid #e64f57"
                    : "2px solid transparent",
                  paddingBottom: rem(2),
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </Group>

        {/* Mobile Burger */}
        <Box hiddenFrom="sm">
          <Burger opened={opened} onClick={toggle} aria-label="Toggle menu" />
        </Box>
      </Flex>

      {/* Drawer for Mobile */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        padding="md"
        size="xs"
        hiddenFrom="sm"
        position="right"
        zIndex={1000}
      >
        <Stack>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              style={{
                textDecoration: "none",
                color: pathname === link.href ? "#e64f57" : "#000",
                fontWeight: "bold",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
