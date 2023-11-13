import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'yusyp.dev',
  description: 'Personal website of software developer Andrii Yusyp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body
        className={`${poppins.className} bg-base-100 flex flex-col h-screen justify-between`}
      >
        <Header />
        <main className="max-w-7xl mb-auto px-2">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
