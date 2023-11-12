import Section from './Section';
import { SECTIONS } from './constants';

const Sections = () => {
  return (
    <nav className="grid sections grid-rows-12 grid-cols-12 gap-2 p-2 7xl:p-0 mb-24">
      {SECTIONS?.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </nav>
  );
};

export default Sections;
