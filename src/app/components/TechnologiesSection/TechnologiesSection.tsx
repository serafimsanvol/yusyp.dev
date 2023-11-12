import Icon from '@/app/Icon/Icon';
import React from 'react';
import Carousel from './Carousel';
import TechnologyCard from './TechnologyCard';
import { TECHNOLOGIES } from './constants';

const TechnologiesSection = () => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <h4 className="text-5xl">Technologies</h4>
        <div className="w-10 h-10 bg-base-100">
          <Icon width={24} height={24} variant="about" />
        </div>
      </div>
      <Carousel>
        {TECHNOLOGIES.map((item) => (
          <TechnologyCard {...item} key={item.icon} />
        ))}
      </Carousel>
    </div>
  );
};

export default TechnologiesSection;
