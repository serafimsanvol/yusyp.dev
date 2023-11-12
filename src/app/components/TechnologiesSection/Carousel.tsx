import { ReactNode } from 'react';

const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex overflow-auto pb-6 custom-carousel">{children}</div>
  );
};

export default Carousel;
