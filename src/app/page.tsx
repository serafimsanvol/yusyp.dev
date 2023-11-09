import SectionHeader from './components/SectionHeader/SectionHeader';
import Sections from './components/Sections/Sections';

export default function Home() {
  return (
    <>
      <h2 className="md:text-8xl text-5xl leading-normal md:leading-normal font-bold text-center mb-14 md:mb-20">
        Andrii Yusyp <br />
        Full Stack Developer
      </h2>
      <div className="mb-[100px]">
        <Sections />
      </div>
      <SectionHeader
        title="Experience"
        logo="experience"
        description={
          "I'm Andrii Yusyp, an experienced Full Stack developer with 5 years of hands-on experience in this field."
        }
      />
    </>
  );
}
