'use client';
import Link from 'next/link';
import React from 'react';
import { headerNavigation } from './constants';
import { usePathname } from 'next/navigation';

export const HeaderNavigation = ({
  orientation = 'horizontal',
}: {
  orientation?: 'horizontal' | 'vertical';
}) => {
  const pathname = usePathname();
  const marginClass = orientation === 'horizontal' ? 'mx-12' : 'my-12';

  return headerNavigation.map((navItem) => (
    <Link
      className={`${marginClass} text-xl font-medium ${
        navItem.href === pathname ? 'text-secondary' : ''
      }`}
      key={navItem.href}
      href={navItem.href}
    >
      {navItem.label}
    </Link>
  ));
};
