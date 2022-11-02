import Image from 'next/image';
import HeroInformation from './heroInformation';

const HeroSection = ({ basicData }: any) => {
  return (
    <div className="container my-10 grid gap-5 md:grid-cols-2">
      <div className="flex w-full items-center">
        <Image
          src={
            basicData.image ||
            'https://res.cloudinary.com/doer1ffjl/image/upload/v1664441064/Portfolio/shamim_2_frqgj0.png'
          }
          className="rounded-full"
          width="480px"
          height="480px"
        />
      </div>
      <HeroInformation basicData={basicData} />
    </div>
  );
};

export default HeroSection;
