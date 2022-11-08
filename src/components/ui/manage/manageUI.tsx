import Image from 'next/image';
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import Link from '../link';

const ManageUI = ({ blogs, deleteBlog }: any) => {
  // console.log(blogs);

  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-3 md:gap-6">
      {blogs?.length > 0 &&
        blogs?.map((blog: { id: number; attributes: any }) => (
          <div key={blog.id} className="rounded-lg bg-white shadow-md">
            <Image
              src={blog.attributes.thumbnail}
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
                  <span>{blog.attributes.view}</span>
                </div>
                <span className="font-base text-sm text-gray-400">
                  27 Jun 2022
                </span>
              </div>
              <div>
                <Link href={`/blog/${blog.id}`}>
                  <h5 className="mb-2 cursor-pointer text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 ">
                    {blog.attributes.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 line-clamp-3">
                  {blog.attributes.shortDescription}
                </p>
              </div>
              <div className=" mt-2 flex items-end justify-between gap-1">
                <button className="flex items-center rounded-lg bg-gray-50 p-2 px-5 text-base font-normal text-gray-900 shadow hover:bg-gray-100">
                  <BiEditAlt className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-2">Edit</span>
                </button>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="flex items-center rounded-lg bg-gray-50 p-2 px-5 text-base font-normal text-gray-900 shadow hover:bg-gray-100"
                >
                  <AiOutlineDelete className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-2">Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ManageUI;
