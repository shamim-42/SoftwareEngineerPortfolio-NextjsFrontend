import { Routes } from '@/config/routes';
import { useToken } from '@/lib/hooks/use-token';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { AiFillHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FaBlog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { ImBlog } from 'react-icons/im';
import { toast } from 'react-toastify';
import Link from '../ui/link';

function DashboardLayout({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  const onClickLogout = () => {
    setToken('');
    setAuthorized(false);
    toast.success('Logout Successfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    router.push('/');
  };

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
                  href={Routes.home}
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <AiFillHome className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.dashboard}
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <FaBlog className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Manage Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.category}
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <BiCategory className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Category</span>
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.newBlog}
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <ImBlog className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Add New Blog</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={onClickLogout}
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <FiLogOut className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Logout</span>
                </button>
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

export default DashboardLayout;
