import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { Navigation } from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mech RPG Wiki & Builder',
  description: 'A comprehensive resource wiki and builder for the mech-focused tabletop RPG system',
  keywords: ['mech', 'rpg', 'tabletop', 'wiki', 'builder', 'combat'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
} 