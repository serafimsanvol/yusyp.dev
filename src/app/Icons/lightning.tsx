import React from 'react';

const Lightning = ({
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
      <g clip-path="url(#clip0_776_218)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.222 -0.999822C15.222 -1.42386 14.9546 -1.80179 14.5547 -1.94286C14.1548 -2.08393 13.7094 -1.95747 13.4434 -1.6273L1.22113 13.5394C0.97952 13.8392 0.931512 14.2511 1.09769 14.5984C1.26387 14.9458 1.61472 15.1668 1.99977 15.1668H8.77754V25.0002C8.77754 25.4242 9.04498 25.8021 9.44486 25.9432C9.84474 26.0843 10.2901 25.9578 10.5562 25.6277L22.7784 10.461C23.02 10.1612 23.068 9.74927 22.9018 9.40193C22.7357 9.05459 22.3848 8.83351 21.9998 8.83351H15.222V-0.999822Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_776_218">
          <rect width="24" height="24" fill="red" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Lightning;
