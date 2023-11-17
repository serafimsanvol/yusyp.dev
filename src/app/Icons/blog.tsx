import React from 'react';

const Blog = ({
  width = 24,
  height = 24,
  fill = '#0045FF',
  className,
}: {
  width?: number;
  height?: number;
  fill?: string;
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
      <path
        d="M17.7398 7.78185L10.3441 15.5265C9.46466 16.4474 8.03882 16.4474 7.15939 15.5265C6.27812 14.6037 6.28024 13.1067 7.16412 12.1866L14.3395 4.70806C16.092 2.87293 18.9332 2.87293 20.6857 4.70806C22.4381 6.54319 22.4381 9.51852 20.6857 11.3536L13.8905 18.4695C11.1093 21.5033 6.89511 21.9649 3.94865 19.0028C1.03827 16.077 1.53157 11.6905 4.47427 8.60895L9.82966 3"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Blog;
