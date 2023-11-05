import React from 'react';

const next = ({
  width = 34,
  height = 34,
  fill = '#F2F2F2',
  background = 'white',
}: {
  width?: number;
  height?: number;
  fill?: string;
  background?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_523_3636)">
        <mask
          id="mask0_523_3636"
          mask-type="alpha"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="34"
          height="34"
        >
          <path
            d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_523_3636)">
          <path
            d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
            fill="#F2F2F2"
          />
          <path
            d="M28.2404 29.753L13.0601 10.1992H10.2V23.7936H12.4881V13.105L26.4442 31.1366C27.074 30.7152 27.6739 30.2526 28.2404 29.753Z"
            fill="url(#paint0_linear_523_3636)"
          />
          <path
            d="M23.9888 10.1992H21.7222V23.7992H23.9888V10.1992Z"
            fill="url(#paint1_linear_523_3636)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_523_3636"
          x1="20.5888"
          y1="22.0048"
          x2="27.2944"
          y2="30.3159"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_523_3636"
          x1="22.8555"
          y1="10.1992"
          x2="22.8175"
          y2="20.1867"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_523_3636">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default next;
