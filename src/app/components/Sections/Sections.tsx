import React from 'react';
import Icon from '@/app/Icon/Icon';

const Sections = () => {
  return (
    <nav className="grid sections grid-rows-12 grid-cols-12 gap-2 p-2 7xl:p-0">
      <div className="col-span-full about row-span-2 lg:col-span-5 bg-primary animated-box h-44 flex  lg:h-[32rem]">
        <div className="flex h-10 items-center">
          <div className="w-10 h-10 bg-[#f2f2f2] flex justify-center items-center rounded-xl mr-4">
            <Icon variant="about" />
          </div>
          <p className="text-[#f2f2f2] text-xl">About</p>
        </div>
      </div>
      <div className="col-span-6 projects  lg:col-span-4 bg-primary animated-box h-32 lg:h-[16rem]">
        <div className="flex h-10 items-center">
          <div className="w-10 h-10 bg-[#f2f2f2] flex justify-center items-center rounded-xl mr-4">
            <Icon variant="projects" />
          </div>
          <p className="text-[#f2f2f2] text-xl">Projects</p>
        </div>
      </div>
      <div className="col-span-6 contact lg:col-span-3 bg-primary animated-box text-[#1e1e1e] h-32 lg:h-[16rem]">
        <div className="flex h-10 items-center">
          <div className="w-10 h-10 bg-[#1e1e1e] flex justify-center items-center rounded-xl mr-4">
            <Icon variant="contact" />
          </div>
          <p className=" text-xl">Contact me</p>
        </div>
      </div>
      <div className="col-span-full experience lg:col-span-4 bg-primary animated-box  h-32 text-[#1e1e1e] lg:h-[16rem]">
        <div className="flex h-10 items-center">
          <div className="w-10 h-10 bg-[#1e1e1e] flex justify-center items-center rounded-xl mr-4">
            <Icon variant="experience" />
          </div>
          <p className="text-xl">Experience</p>
        </div>
      </div>
      <div className="col-span-full blog lg:col-span-3 bg-primary animated-box  h-32 lg:h-[16rem]">
        <div className="flex h-10 items-center">
          <div className="w-10 h-10 bg-[#f2f2f2] flex justify-center items-center rounded-xl mr-4">
            <Icon variant="blog" />
          </div>
          <p className="text-[#f2f2f2] text-xl">Blog</p>
        </div>
      </div>
    </nav>
  );
};

export default Sections;
