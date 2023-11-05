import type { Metadata } from 'next';
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
      <body
        className={`${poppins.className} bg-base-100 flex flex-col h-screen justify-between`}
      >
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
