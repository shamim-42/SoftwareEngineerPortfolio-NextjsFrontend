import Image from 'next/image';
import { AiFillHome } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from '../link';
import SectionBlock from '../section-block';

const ViewBlogUI = ({ blog }: any) => {
  return (
    <SectionBlock>
      <div className="md:px-10">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <AiFillHome className="mr-2 h-4 w-4" />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <MdKeyboardArrowRight className="h-6 w-6 font-bold text-gray-400" />
                <Link
                  href="/blog"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900  md:ml-2"
                >
                  Blog
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <MdKeyboardArrowRight className="h-6 w-6 font-bold text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500 ">
                  {blog?.title && blog?.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="my-8 w-full border p-4">
          <div className="my-3 flex items-center">
            <MdKeyboardArrowRight className="h-6 w-6 font-bold text-gray-400" />
            <h2 className="text-3xl  font-bold text-gray-700 ">
              {blog?.title && blog?.title}
            </h2>
          </div>
          {/* <p className="mb-2 px-3 font-medium text-gray-500 md:mb-6">
            Posted on: {new Date(blog?.createdAt).toDateString()}
          </p> */}
          <Image
            alt="Thumbnail"
            src={blog?.thumbnail}
            width="100%"
            height="40%"
            layout="responsive"
            objectFit="contain"
          />
          <div
            dangerouslySetInnerHTML={{ __html: blog?.content }}
            className="my-8"
          />
        </div>
      </div>
    </SectionBlock>
  );
};

export default ViewBlogUI;
