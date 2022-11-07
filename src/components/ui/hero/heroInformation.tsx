import { GoPrimitiveDot } from 'react-icons/go';
import { GrGithub, GrLinkedinOption } from 'react-icons/gr';
import Link from '../link';

const HeroInformation = ({ basicData }: any) => {
  return (
    <div className="w-full text-center md:text-left">
      <h2 className="text-4xl font-semibold md:text-5xl ">{basicData?.name}</h2>
      <h3 className="py-1 text-2xl font-medium text-[#515151] md:text-3xl">
        {basicData?.title}
      </h3>
      <p>{basicData?.location}</p>
      <div className="my-5 flex gap-3 md:gap-4">
        <Link
          className="inline-flex items-center gap-px rounded-lg text-center  text-white"
          href={basicData?.linkedin || '/'}
          target="_blank"
        >
          <span className="rounded-l-lg bg-[#0288D1] py-2 px-2 text-[17px] font-medium md:text-[20px]">
            <GrLinkedinOption />
          </span>
          <span className="rounded-r-lg bg-[#0288D1] py-1.5 px-2 text-[14px] md:text-[16px]">
            Linkedin
          </span>
        </Link>
        <Link
          className="inline-flex items-center gap-px rounded-lg text-center  text-white"
          href={basicData?.github || '/'}
          target="_blank"
        >
          <span className="rounded-l-lg bg-[#4E5559] py-2 px-2 text-[17px] font-medium md:text-[20px]">
            <GrGithub />
          </span>
          <span className="rounded-r-lg bg-[#4E5559] py-1.5 px-2 text-[14px] md:text-[16px]">
            Github
          </span>
        </Link>
        <Link
          href="#footer"
          className="rounded-lg border border-black px-3 py-1.5 text-[14px] transition-colors	hover:border-blue-600	hover:bg-blue-600 hover:text-white md:text-[16px]"
        >
          Contact me
        </Link>
      </div>

      <div className="text-left text-base">
        <p>
          Hi! <br /> This is Shamim.
        </p>
        <div className="flex items-start gap-2">
          <GoPrimitiveDot className="mt-1 text-[#025C8E]" />
          <p>Passionate and Professional Fullstack Software Developer</p>
        </div>
        <div className="flex items-start gap-2">
          <GoPrimitiveDot className="mt-1 text-[#F96919]" />
          <p>
            Working in a wide range of software engineering stacks that include
          </p>
        </div>
        <div className="flex items-start gap-2">
          <GoPrimitiveDot className="mt-1 text-[#C13FEF]" />
          <p>Web Frontend, Backend and DevOps</p>
        </div>
        <div className="flex items-start gap-2">
          <GoPrimitiveDot className="mt-1 text-[#67C40B]" />
          <p>Writing readable, reusable and efficient code is my key focus</p>
        </div>
        <div className="flex items-start gap-2">
          <GoPrimitiveDot className="mt-1 text-[#F1C836]" />
          <p>
            Ability to accomplish tasks independently as well as under someone’s
            supervision
          </p>
        </div>
      </div>

      <div className="my-6 flex justify-center gap-3 md:justify-start md:gap-6">
        <Link
          href={basicData?.resume || '/'}
          className="rounded-lg border border-black px-3 py-1.5 text-[14px] transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white md:text-[16px]	"
          target="_blank"
        >
          Download Resume
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-black px-3 py-1.5 text-[14px] transition-colors	hover:border-blue-600 hover:bg-blue-600 hover:text-white md:text-[16px]"
        >
          Read My Blogs
        </Link>
      </div>
    </div>
  );
};

export default HeroInformation;
