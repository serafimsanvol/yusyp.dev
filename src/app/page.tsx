import JobsSection from './components/JobsSection/JobsSection';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Sections from './components/Sections/Sections';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection';

export default function Home() {
  return (
    <>
      <h2 className="md:text-8xl text-5xl leading-normal md:leading-normal font-bold text-center mb-14 md:mb-20">
        Andrii Yusyp <br />
        Full Stack Developer
      </h2>
      <Sections />
      <SectionHeader
        title="Experience"
        logo="experience"
        description={
          "I'm Andrii Yusyp, an experienced Full Stack developer with 5 years of hands-on experience in this field."
        }
      />
      <JobsSection />
      <TechnologiesSection />
    </>
  );
}
