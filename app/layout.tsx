import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sole Trader AI - Make.com Scenario Marketplace',
  description: 'Discover and integrate AI-powered Make.com scenarios to automate your business operations',
  keywords: ['Make.com', 'automation', 'AI', 'scenarios', 'marketplace'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
