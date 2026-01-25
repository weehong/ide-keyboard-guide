import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IDE Keyboard Shortcuts | IntelliJ IDEA ⇄ Visual Studio',
  description:
    'A comprehensive guide to keyboard shortcuts for IntelliJ IDEA and Visual Studio. Find the equivalent shortcuts between IDEs with our AI-powered assistant.',
  keywords: [
    'keyboard shortcuts',
    'IntelliJ IDEA',
    'Visual Studio',
    'IDE',
    'hotkeys',
    'productivity',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
