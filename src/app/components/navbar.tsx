'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import ThemeToggle from '@/app/components/theme-toggle';
import { Box, Flex, Burger, Drawer, Group, Stack, Anchor } from '@mantine/core';

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      <Flex p="md" justify="space-between" align="center" px="xl">
        <Link href="/" style={{ textDecoration: 'none' }}>
          HSB
        </Link>

        {/* Desktop Links */}
        <Flex align="center" gap="md">
          <Group gap="md" visibleFrom="sm">
            {links.map((link) => {
              const isActive = pathname === link.href;
              console.log(pathname);
              return (
                <Anchor
                  key={link.label}
                  component={Link}
                  href={link.href}
                  style={{
                    position: 'relative',
                    color: isActive ? '#e64f57' : 'inherit',
                    fontWeight: 700,
                    textDecoration: 'none',
                    paddingBottom: 4,
                  }}
                >
                  {link.label}
                </Anchor>
              );
            })}
          </Group>
          <ThemeToggle />
          {/* Mobile Burger */}
          <Box hiddenFrom="sm">
            <Burger opened={opened} onClick={toggle} aria-label="Toggle menu" />
          </Box>
        </Flex>
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
                textDecoration: 'none',
                color: pathname === link.href ? '#e64f57' : 'inherit',
                fontWeight: 'bold',
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
