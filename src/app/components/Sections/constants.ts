import { SVGIcon } from '@/app/Icons';

export const SECTIONS: {
  title: string;
  icon: SVGIcon;
  className: string;
  iconBackground?: string;
}[] = [
  {
    title: 'About',
    icon: 'about',
    className:
      'col-span-full about row-span-2 lg:col-span-5 bg-primary animated-box h-44 flex  lg:h-[32rem]',
    iconBackground: 'bg-[#f2f2f2]',
  },
  {
    title: 'Projects',
    icon: 'projects',
    className:
      'col-span-6 projects  lg:col-span-4 bg-primary animated-box h-32 lg:h-[16rem]',
    iconBackground: 'bg-[#f2f2f2]',
  },
  {
    title: 'Contact me',
    icon: 'contact',
    className:
      'col-span-6 contact lg:col-span-3 bg-primary animated-box text-[#1e1e1e] h-32 lg:h-[16rem]',
    iconBackground: 'bg-[#1e1e1e]',
  },
  {
    title: 'Experience',
    icon: 'experience',
    className:
      'col-span-full experience lg:col-span-4 bg-primary animated-box  h-32 text-[#1e1e1e] lg:h-[16rem]',
    iconBackground: 'bg-[#1e1e1e]',
  },
  {
    title: 'Blog',
    icon: 'blog',
    className:
      'col-span-full blog lg:col-span-3 bg-primary animated-box  h-32 lg:h-[16rem]',
    iconBackground: 'bg-[#f2f2f2]',
  },
];
