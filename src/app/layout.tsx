import "@/app/globals.css";
import {
  ColorSchemeScript,
  MantineColorsTuple,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "./components/navbar";
import ProgressBarProvider from "./provider/progress";

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
            primaryColor: "teal",
            fontFamily: "var(--font-inter), var(--font-space-grotesk)",
          }}
        >
          <ProgressBarProvider>
            <Navbar />
            {children}
          </ProgressBarProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
