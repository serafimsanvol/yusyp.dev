import React from 'react';

const Linkedin = ({
  width = 30,
  height = 30,
  fill = '#1E1E1E',
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6667 0C27.5507 0 28.3986 0.351189 29.0237 0.976311C29.6488 1.60143 30 2.44928 30 3.33333V26.6667C30 27.5507 29.6488 28.3986 29.0237 29.0237C28.3986 29.6488 27.5507 30 26.6667 30H3.33333C2.44928 30 1.60143 29.6488 0.976311 29.0237C0.351189 28.3986 0 27.5507 0 26.6667V3.33333C0 2.44928 0.351189 1.60143 0.976311 0.976311C1.60143 0.351189 2.44928 0 3.33333 0H26.6667ZM25.8333 25.8333V17C25.8333 15.559 25.2609 14.177 24.2419 13.1581C23.223 12.1391 21.841 11.5667 20.4 11.5667C18.9833 11.5667 17.3333 12.4333 16.5333 13.7333V11.8833H11.8833V25.8333H16.5333V17.6167C16.5333 16.3333 17.5667 15.2833 18.85 15.2833C19.4688 15.2833 20.0623 15.5292 20.4999 15.9668C20.9375 16.4043 21.1833 16.9978 21.1833 17.6167V25.8333H25.8333ZM6.46667 9.26667C7.20927 9.26667 7.92146 8.97167 8.44657 8.44657C8.97167 7.92146 9.26667 7.20927 9.26667 6.46667C9.26667 4.91667 8.01667 3.65 6.46667 3.65C5.71964 3.65 5.00321 3.94675 4.47498 4.47498C3.94675 5.00321 3.65 5.71964 3.65 6.46667C3.65 8.01667 4.91667 9.26667 6.46667 9.26667ZM8.78333 25.8333V11.8833H4.16667V25.8333H8.78333Z"
        fill={fill}
      />
    </svg>
  );
};

export default Linkedin;