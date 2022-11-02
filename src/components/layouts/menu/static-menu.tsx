import Link from '@/components/ui/link';
import { mainAtom } from '@/store/main-atom';
import { useAtom } from 'jotai';

const StaticMenu = () => {
  const [basicData, _] = useAtom(mainAtom);

  const headerLinks = [
    { href: basicData.github, label: 'Github' },
    { href: basicData.linkedin, label: 'Linkedin' },
  ];

  return (
    <>
      {headerLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-blue-dark border-blue rounded border bg-white py-2 px-4 font-semibold hover:border-transparent hover:bg-orange-500 hover:text-white"
            aria-label={link.label}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
