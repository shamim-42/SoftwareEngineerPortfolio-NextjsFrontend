import { mainAtom } from '@/store/main-atom';
import { useAtom } from 'jotai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';
import { socialsData } from '../../assets/data/socialsData';
import Link from '../ui/link';

const Footer = () => {
  const [basicData, _] = useAtom(mainAtom);

  return (
    <footer id="footer" className={'h-14 md:h-16'}>
      <div
        className={
          'w-full transform-gpu items-center justify-center gap-4 border-t border-border-100 bg-[#F5F5F5] px-6 py-3 md:flex md:h-16 md:justify-between md:p-12 md:px-16 lg:px-24 xl:px-32'
        }
      >
        <div className="align-between flex flex-col justify-between gap-2 ">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link
              href={basicData.facebook}
              className="text-gray-500 hover:text-[#1877F2] "
              target="_blank"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link
              href={basicData.linkedin}
              className="text-gray-500 hover:text-[#0A66C2] "
              target="_blank"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
            <Link
              href={basicData.twitter}
              className="text-gray-500 hover:text-[#1da1f2] "
              target="_blank"
            >
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link
              href={basicData.github}
              className="text-gray-500 hover:text-gray-900 "
              target="_blank"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href={basicData.stackoverflow}
              className="text-gray-500 hover:text-[#F48225] "
              target="_blank"
            >
              <FaStackOverflow className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm">Mail: {socialsData.mail}</p>
        </div>
        <address className="text-sm text-gray-600">
          <p className="font-semibold">Address:</p>
          <p>{basicData.address}</p>
        </address>
        <p className="flex flex-wrap items-center text-sm">
          Copyright&nbsp;
          <AiOutlineCopyrightCircle className="h-4 w-4 self-center" />
          &nbsp;{new Date().getFullYear()}&nbsp;Shamim, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
