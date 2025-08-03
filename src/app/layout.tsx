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

import { Manrope, Space_Grotesk } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
        <ColorSchemeScript />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <MantineProvider
          theme={{
            colors: {
              myColor,
            },
            primaryColor: "red",
            fontFamily: "var(--font-manrope), var(--font-space-grotesk)",
          }}
        >
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
