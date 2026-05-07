import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wool Ranch',
  description: 'Investment Platform',
};

// This section fixes the "zooming to fit" issue and locks the scale
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 flex justify-center`}>
        {/* This main tag acts as your "phone frame." 
          - max-w-md: keeps it the size of a phone on desktop
          - min-h-screen: ensures the background covers the whole height
          - relative: helps with any absolute positioned nav bars
        */}
        <main className="relative w-full max-w-md min-h-screen bg-black overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
