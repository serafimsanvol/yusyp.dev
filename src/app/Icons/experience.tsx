import React from 'react';

const Experience = ({
  width = 24,
  height = 24,
  fill = '#3CDBA2',
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
      <g clipPath="url(#clip0_428_2544)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5679 2.09816C11.8411 1.96728 12.1589 1.96728 12.4321 2.09816L23.4321 7.36817C23.7737 7.53185 23.9935 7.87452 23.9999 8.25329C24.0062 8.63206 23.798 8.98189 23.462 9.1569L12.462 14.8869C12.1725 15.0377 11.8275 15.0377 11.538 14.8869L5.75 11.8719V11.2052L10.2584 8.65265C10.6189 8.44857 10.7456 7.99093 10.5415 7.63048C10.3375 7.27003 9.87982 7.14327 9.51937 7.34735L4.63048 10.1153C4.39535 10.2485 4.25 10.4978 4.25 10.768V11.0905L0.538014 9.1569C0.202042 8.98189 -0.00619532 8.63206 0.000140596 8.25329C0.00647645 7.87452 0.226297 7.53185 0.567935 7.36817L11.5679 2.09816ZM4.25 13.8385C4.09097 14.0189 3.99999 14.2533 4 14.5V18.9485C4 19.2009 4.09393 19.4329 4.25 19.6099V13.8385ZM5.75 20.0436C8.08803 20.3821 9.93481 21.2051 11.7474 22.7592C12.1219 23.0803 12.6746 23.0803 13.0492 22.7592C15.0744 21.0228 17.1417 20.1991 19.8894 19.9442C20.3367 19.9027 20.7014 19.568 20.7811 19.1259C21.1013 17.3505 21.0685 15.541 20.6941 13.7908C20.628 13.4821 20.4201 13.2227 20.1331 13.0911C19.8462 12.9594 19.5139 12.971 19.2368 13.1224L12.3655 16.8756L5.75 13.7484V20.0436Z"
          fill={fill}
        />
        <path
          d="M4 19V9.65712L8.88889 6.88913"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_2544">
          <rect width={width} height={height} fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Experience;
