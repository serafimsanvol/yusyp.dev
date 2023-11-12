import variants, { SVGIcon } from '../Icons';

const Icon = ({
  variant,
  fill,
  width,
  height,
  background,
}: {
  variant: SVGIcon;
  fill?: string;
  width?: number;
  height?: number;
  background?: string;
}) => {
  const Icon = variants[variant];

  if (!Icon) return null;

  return <Icon fill={fill} background={background} width={width} height={height} />;
};

export default Icon;
