import React from 'react';
import { Technology } from './constants';
import Icon from '@/app/Icon/Icon';

const TechnologyCard = ({
  name,
  icon,
  description,
  accentColor,
  accentClass,
  backgroundColor,
}: Technology) => {
  return (
    <div className="card p-6 w-full flex justify-between relative bg-neutral    min-w-[300px] min-h-[300px] mr-6 last:mr-0">
      <div className="flex items-center">
        <div className="mr-4 bg-[#f2f2f2] rounded-xl flex items-center justify-center w-12 h-12">
          <Icon fill="#202020" background="white" variant={icon} />
        </div>
        <div className="text-2xl">{name}</div>
      </div>
      <div className={`text-[#bebebe]`}>{description}</div>
      <div
        className={`absolute opacity-0 hover:opacity-100  flex-col z-50 top-0 left-0 w-full ${accentClass}  h-full rounded-xl flex justify-center items-center  transition-all duration-1000 ease-in-out`}
      >
        <div
          className={`w-28 h-28  mb-7 flex justify-center items-center  rounded-full ${backgroundColor}`}
        >
          <Icon width={80} height={80} fill={accentColor} variant={icon} />
        </div>
        <div className="text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default TechnologyCard;
