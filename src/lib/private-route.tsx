import { Routes } from '@/config/routes';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [isAuthorized] = useAtom(authorizationAtom);

  useEffect(() => {
    if (!isAuthorized) {
      router.push(Routes.login);
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
