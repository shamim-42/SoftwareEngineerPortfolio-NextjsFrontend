import Image from 'next/image';
import HeroInformation from './heroInformation';

const HeroSection = ({ basicData }: any) => {
  return (
    <div className="container my-10 grid gap-5 md:grid-cols-2">
      <div className="flex w-full items-center">
        <Image
          src={
            basicData?.image ||
            'https://shamims-world.s3.ap-southeast-1.amazonaws.com/personal-sites-images/shamim_2_fbb2c326fa.png'
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
