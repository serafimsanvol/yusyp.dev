import React from 'react';

const Message = ({
  width = 24,
  height = 24,
  fill = '#0045FF',
  background = '#3CDBA2',
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 1C6.02658 1 1 5.38065 1 11C1 13.6283 2.4529 16.0125 4.48482 17.7057C6.27491 19.1975 8.59398 20.2252 11 20.4525V22C11 22.3318 11.1646 22.642 11.4394 22.8281C11.7141 23.0141 12.0633 23.0517 12.3714 22.9285C14.1311 22.2246 16.738 20.7905 18.923 18.8021C21.091 16.8293 23 14.1639 23 11C23 5.38065 17.9734 1 12 1Z"
        fill={fill}
      />
      <path
        d="M8.5 11C8.5 11.8284 7.82843 12.5 7 12.5C6.17157 12.5 5.5 11.8284 5.5 11C5.5 10.1716 6.17157 9.5 7 9.5C7.82843 9.5 8.5 10.1716 8.5 11Z"
        fill={background}
      />
      <path
        d="M13.5 11C13.5 11.8284 12.8284 12.5 12 12.5C11.1716 12.5 10.5 11.8284 10.5 11C10.5 10.1716 11.1716 9.5 12 9.5C12.8284 9.5 13.5 10.1716 13.5 11Z"
        fill={background}
      />
      <path
        d="M18.5 11C18.5 11.8284 17.8284 12.5 17 12.5C16.1716 12.5 15.5 11.8284 15.5 11C15.5 10.1716 16.1716 9.5 17 9.5C17.8284 9.5 18.5 10.1716 18.5 11Z"
        fill={background}
      />
    </svg>
  );
};

export default Message;
