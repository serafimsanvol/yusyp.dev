import React from 'react';

const About = ({
  width = 24,
  height = 24,
  fill = '#0045FF',
  background = '#001f2b',
  className,
}: {
  width?: number;
  height?: number;
  fill?: string;
  background?: string;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_428_2273)">
        <path
          d="M0 12C6 12 12 6 12 0C12 6 18 12 24 12C18 12 12 18 12 24C12 18 6 12 0 12Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_2273">
          <rect width={width} height={height} fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default About;
