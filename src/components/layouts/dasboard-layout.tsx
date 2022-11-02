import { AiFillHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FaBlog } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import Link from '../ui/link';

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen w-full">
      <h1 className="bg-sky-600 py-3 text-center text-4xl font-bold text-white">
        Dashboard
      </h1>
      <div className="flex gap-2">
        <aside
          className="min-h-full w-3/12 max-w-xs bg-gray-50"
          aria-label="Sidebar"
        >
          <div className="overflow-y-auto rounded bg-gray-50 py-4 px-3">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <AiFillHome className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/manage"
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <FaBlog className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Manage Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/category"
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <BiCategory className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Category</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/new-blog"
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <ImBlog className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Add New Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="no-scrollbar h-[90vh] w-9/12 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
