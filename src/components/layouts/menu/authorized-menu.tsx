import { UserOutlinedIcon } from '@/components/icons/user-outlined';
import Avatar from '@/components/ui/avatar';
import { siteSettings } from '@/config/site';
import { avatarPlaceholder } from '@/lib/placeholders';
import { useLogout } from '@/rest/user';
import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const AuthorizedMenu: React.FC<{ minimal?: boolean }> = ({ minimal }) => {
  const { mutate: logout } = useLogout();
  const router = useRouter();

  function handleClick(path: string) {
    router.push(path);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center focus:outline-none">
        {minimal ? (
          <UserOutlinedIcon className="h-5 w-5" />
        ) : (
          <Avatar
            src={me?.profile?.avatar?.thumbnail ?? avatarPlaceholder}
            title="user name"
            className="h-10 w-10"
          />
        )}
        <span className="sr-only">User Avatar</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className={cn(
            'absolute right-0 mt-1 w-48 origin-top-right rounded bg-white pb-4 shadow-700 focus:outline-none '
          )}
        >
          {siteSettings.authorizedLinks.map(({ href, label }) => (
            <Menu.Item key={`${href}${label}`}>
              {({ active }) => (
                <li>
                  <button
                    onClick={() => handleClick(href)}
                    className={cn(
                      'block w-full py-2.5 px-6 text-left text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-none',
                      active ? 'text-accent' : 'text-heading'
                    )}
                  >
                    {label}
                  </button>
                </li>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            <li>
              <button
                onClick={() => logout()}
                className={cn(
                  'block w-full py-2.5 px-6 text-left text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-none'
                )}
              >
                Logout
              </button>
            </li>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AuthorizedMenu;
