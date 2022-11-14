import { useUser } from '@/rest/user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const { isAuthorized } = useUser();

  useEffect(() => {
    if (!isAuthorized) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
