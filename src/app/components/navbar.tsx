"use client";
import { Box, Flex } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Flex p="md" justify="space-between" align="center" px={"xl"}>
      <Flex>
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          HSB
        </Link>
      </Flex>
      <Flex justify="center" align="center" gap="10px">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: isActive ? "#e64f57" : "#000",
                fontWeight: isActive ? "bold" : "bold",
                borderBottom: isActive ? "2px solid #e64f57" : "none",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
