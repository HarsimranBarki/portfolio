import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineColorsTuple,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Navbar from "./components/navbar";
import { NavigationProgress } from "@mantine/nprogress";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsimran Singh",
  description: "portfolio of Harsimran Singh",
};

const myColor: MantineColorsTuple = [
  "#f1f1ff",
  "#e0dff2",
  "#bfbdde",
  "#9b98ca",
  "#7d79b9",
  "#6a66af",
  "#605cac",
  "#504c97",
  "#464388",
  "#3b3979",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript
          defaultColorScheme="auto"
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <MantineProvider
          defaultColorScheme="auto"
          theme={{
            colors: {
              myColor,
            },
            primaryColor: "gray",
            fontFamily: "var(--font-inter), var(--font-space-grotesk)",
          }}
        >
          <NavigationProgress />
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
