import Link from 'next/link';
import Icon from '@/app/Icon/Icon';
import { SVGIcon } from '@/app/Icons';

const Section = ({
  title,
  icon,
  iconBackground = 'bg-[#f2f2f2]',
  className,
}: {
  title: string;
  icon: SVGIcon;
  className?: string;
  iconBackground?: string;
}) => {
  return (
    <Link href={`/#${icon}`} className={className}>
      <div className="flex h-10 items-center">
        <div
          className={`w-10 h-10 ${iconBackground} flex justify-center items-center rounded-xl mr-4`}
        >
          <Icon variant={icon} />
        </div>
        <p className="text-xl">{title}</p>
      </div>
    </Link>
  );
};

export default Section;
