import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wool Ranch',
  description: 'Investment Platform',
};

// This is the "Magic" for the mobile feel. 
// It prevents the browser from scaling the UI like a document.
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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="flex flex-col min-h-screen items-center">
          {/* w-full: Takes full width on phone
            max-w-md: Keeps it from stretching into a wide mess on desktop
            relative: Allows your future bottom nav to stick correctly
          */}
          <main className="w-full max-w-md min-h-screen relative flex flex-col overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
