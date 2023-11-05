import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer text-xl justify-items-center md:justify-between p-6 max-w-7xl mx-auto">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h6>Copyright {year} © Andrii Yusyp</h6>
      <h6 className="block">
        Designed By{' '}
        <Link className="text-secondary inline-block" href={'/'}>
          {' '}
          Anna K.
        </Link>
      </h6>
    </footer>
  );
};

export default Footer;
