import Icon from '@/app/Icon/Icon';
import React from 'react';
import Tag from './Tag';

const Job = ({
  years,
  position,
  company,
  description,
  tags,
}: {
  years: string;
  position: string;
  company: string;
  description: string;
  tags: string[];
}) => {
  return (
    <div className="p-6 mb-2 flex flex-col justify-between h-[400px] xl:h-[500px] w-full mr-2 bg-neutral rounded-[48px] last:mr-0">
      <div className="overflow-y-auto mb-6">
        <div className="flex flex-col xl:flex-row">
          <div className="mr-6 min-w-fit text-[#BEBEBE] text-sm">{years}</div>
          <div className="xl:mr-24 mb-6">
            <div className="flex items-center mb-6">
              <div>{position}</div>
              <div className="mx-2">
                <Icon width={16} height={16} variant="about" />
              </div>
              <div>{company}</div>
            </div>
            <div className="">
              <p className="text-[#BEBEBE] text-base">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Job;
