import variants, { SVGIcon } from '../Icons';

const Icon = ({
  variant,
  fill,
  width,
  height,
}: {
  variant: SVGIcon;
  fill?: string;
  width?: number;
  height?: number;
}) => {
  const Icon = variants[variant];

  if (!Icon) return null;

  return <Icon fill={fill} width={width} height={height} />;
};

export default Icon;
