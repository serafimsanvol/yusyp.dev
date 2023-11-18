const Close = ({
  width = 48,
  height = 48,
  fill = '#F2F2F2',
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
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.7066 10.7071C39.0971 10.3166 39.0971 9.68342 38.7066 9.29289C38.3161 8.90237 37.6829 8.90237 37.2924 9.29289L23.9997 22.5855L10.7071 9.29292C10.3166 8.9024 9.68342 8.9024 9.2929 9.29292C8.90237 9.68345 8.90237 10.3166 9.2929 10.7071L22.5855 23.9998L9.29289 37.2924C8.90237 37.6829 8.90237 38.3161 9.29289 38.7066C9.68342 39.0971 10.3166 39.0971 10.7071 38.7066L23.9997 25.414L37.2924 38.7066C37.6829 39.0971 38.3161 39.0971 38.7066 38.7066C39.0971 38.3161 39.0971 37.6829 38.7066 37.2924L25.4139 23.9998L38.7066 10.7071Z"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
