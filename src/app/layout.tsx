import '@/app/globals.css';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import Navbar from '@/app/components/navbar';
import AnimateWrapper from '@/app/provider/animate';
import { Inter, Space_Grotesk } from 'next/font/google';
import ProgressBarProvider from '@/app/provider/progress';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harsimran Singh',
  description: 'portfolio of Harsimran Singh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" nonce="8IBTHwOdqNKAWeKl7plt8g==" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <MantineProvider
          defaultColorScheme="auto"
          theme={{
            primaryColor: 'teal',
            fontFamily: 'var(--font-inter), var(--font-space-grotesk)',
          }}
        >
          <ProgressBarProvider>
            <AnimateWrapper>
              <Navbar />
              {children}
            </AnimateWrapper>
          </ProgressBarProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
