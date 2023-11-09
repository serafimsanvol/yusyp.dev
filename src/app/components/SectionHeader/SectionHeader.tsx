import Icon from '@/app/Icon/Icon';
import { SVGIcon } from '@/app/Icons';
import React from 'react';

const SectionHeader = ({
  title,
  logo,
  description,
}: {
  title: string;
  logo: SVGIcon;
  description: string;
}) => {
  return (
    <div className="px-2 mb-8">
      <div className="flex items-center mb-6">
        <div className="iconWrapper bg-primary mr-4">
          <Icon width={24} height={24} variant={logo} />
        </div>
        <h4 className="text-xl">{title}</h4>
      </div>
      <h3 className="text-4xl">{description}</h3>
    </div>
  );
};

export default SectionHeader;
