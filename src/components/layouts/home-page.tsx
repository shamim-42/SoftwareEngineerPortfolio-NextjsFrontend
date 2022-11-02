import SectionBlock from '@/components/ui/section-block';
import Blog from '../ui/blog/blog';
import Education from '../ui/education/education';
import Experience from '../ui/experience/experience';
import HeroSection from '../ui/hero/heroSection';
import Skill from '../ui/skill/skill';

export default function HomePage({
  educationData,
  skills,
  experience,
  basicData,
  blogs,
}: any) {
  console.log(blogs);
  return (
    <div className="flex flex-1 flex-col bg-white">
      <main className="mt-4 block w-full xl:overflow-hidden">
        <SectionBlock>
          <HeroSection basicData={basicData} />
        </SectionBlock>
        <div className="bg-[#f5f5f5]">
          <SectionBlock>
            <Experience experiences={experience} />
          </SectionBlock>
        </div>
        <SectionBlock>
          <Education educationData={educationData} />
        </SectionBlock>
        <div className="bg-[#f5f5f5]">
          <SectionBlock>
            <Skill skillsData={skills} />
          </SectionBlock>
        </div>
        <SectionBlock>
          <Blog blogs={blogs} />
        </SectionBlock>{' '}
      </main>
    </div>
  );
}
