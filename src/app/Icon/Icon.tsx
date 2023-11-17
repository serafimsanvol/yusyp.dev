import variants, { SVGIcon } from '../Icons';

const Icon = ({
  variant,
  fill,
  width,
  height,
  background,
  className,
}: {
  variant: SVGIcon;
  fill?: string;
  width?: number;
  height?: number;
  background?: string;
  className?: string;
}) => {
  const Icon = variants[variant];

  if (!Icon) return null;

  return (
    <Icon
      className={className}
      fill={fill}
      background={background}
      width={width}
      height={height}
    />
  );
};

export default Icon;
