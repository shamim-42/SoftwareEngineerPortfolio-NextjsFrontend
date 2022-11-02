import BlogCard from '@/components/cards/blogCard';
import { Blog } from '@/types';
import { AiFillHome } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from '../link';

const BlogPage = ({ blogs }: any) => {
  return (
    <div>
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
        </ol>
      </nav>
      <h2 className="py-6 text-left text-3xl font-semibold text-[#515151] md:text-4xl">
        Latest Blog
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {blogs.map(
          (
            blog: {
              attributes: Blog;
              id: number;
            },
            index: number
          ) => (
            <BlogCard blog={blog.attributes} key={index} id={blog.id} />
          )
        )}
      </div>
    </div>
  );
};

export default BlogPage;
