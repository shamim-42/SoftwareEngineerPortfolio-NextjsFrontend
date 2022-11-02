import BlogCard from '@/components/cards/blogCard';
import { Blog } from '@/types';
import { BsArrowRight } from 'react-icons/bs';
import Link from '../link';

const Blog = ({ blogs }: any) => {
  const blogData = blogs?.length > 8 ? blogs.slice(0, 8) : blogs;

  return (
    <div>
      <div className="my-8 flex items-center justify-between ">
        <h2 className="text-left text-3xl font-semibold text-[#515151] md:text-4xl">
          Latest Blog
        </h2>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span>Read More</span>
          <BsArrowRight />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {blogData.map(
          (
            blog: {
              attributes: Blog;
              id: number;
            },
            index: number
          ) => (
            <BlogCard blog={blog.attributes} id={blog.id} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Blog;
