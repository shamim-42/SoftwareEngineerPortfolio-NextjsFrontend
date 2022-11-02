import { Blog } from '@/types';
import Image from 'next/image';
import { AiFillEye } from 'react-icons/ai';
import Link from '../ui/link';

interface BlogProps {
  blog: Blog;
  id: number;
}

const BlogCard: React.FC<BlogProps> = ({ blog, id }) => {
  return (
    <div className="rounded-lg bg-white shadow-md">
      <Image
        src={blog.thumbnail}
        alt="Blog Thumbnail"
        className="rounded-t-lg"
        width="100%"
        height="60%"
        layout="responsive"
      />
      <div className="flex flex-col justify-between p-5">
        <div className="mb-2 flex items-center justify-between lg:mb-3">
          <div className="font-base flex items-center gap-1 text-sm text-gray-500">
            <AiFillEye className="text-xl" />
            <span>{blog.view}</span>
          </div>
          <span className="font-base text-sm text-gray-400">27 Jun 2022</span>
        </div>
        <div>
          <Link href={`/blog/${id}`}>
            <h5 className="mb-2 cursor-pointer text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 ">
              {blog.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 line-clamp-3">
            {blog.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
