import { BarCenterLeft } from '@/components/icons/bar-three-center-left';
import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { authorizationAtom } from '@/store/authorization-atom';
import { drawerAtom } from '@/store/drawer-atom';
import { mainAtom } from '@/store/main-atom';
import cn from 'classnames';
import { useAtom } from 'jotai';
import { BarsIcon } from '../icons/bars';
import Link from '../ui/link';

const Header = () => {
  const [basicData, _] = useAtom(mainAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const [drawerView, setDrawerView] = useAtom(drawerAtom);

  function handleSidebar() {
    setDrawerView({ display: true, view: 'SIDEBAR_MAIN' });
  }

  return (
    <header className={'h-14 md:h-16 lg:h-22'}>
      <div
        className={cn(
          'fixed z-50 flex h-14 w-full transform-gpu items-center justify-between border-b border-border-200 bg-light px-7 py-5 shadow-sm transition-transform duration-300 md:h-16 lg:h-22 xl:px-16'
        )}
      >
        <div className="flex w-fit items-center lg:w-auto">
          <Logo className="mx-auto lg:mx-0" />
        </div>
        <ul className="hidden shrink-0 items-center space-x-10 lg:flex">
          <li>
            <Link
              href={basicData?.github}
              className="text-blue-dark border-blue rounded border bg-white py-1.5 px-3 font-semibold transition hover:border-transparent hover:bg-black hover:text-white"
              aria-label="github"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href={basicData?.linkedin}
              className="text-blue-dark border-blue rounded border bg-white py-1.5 px-3 font-semibold transition hover:border-transparent hover:bg-[#0A66C2] hover:text-white"
              aria-label="Linkedin"
            >
              Linkedin
            </Link>
          </li>
          <div className="flex items-center space-x-4">
            {/* <li>{isAuthorize ? <AuthorizedMenu /> : <LoginButton />}</li> */}
            {/* <li>{true ? <AuthorizedMenu /> : <LoginButton />}</li> */}
          </div>
        </ul>
        <Button
          className="w-10 rounded-full lg:hidden"
          variant="outline"
          size="small"
          onClick={handleSidebar}
          aria-label="Login or Join to Teton private limited"
        >
          {drawerView?.display && drawerView?.view === 'SIDEBAR_MAIN' ? (
            <BarsIcon className="h-10 w-10" />
          ) : (
            <BarCenterLeft className="h-10 w-10" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
