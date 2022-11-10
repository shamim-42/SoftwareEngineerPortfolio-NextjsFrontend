import LoginView from '@/components/auth/login-form';
import { BackArrowRound } from '@/components/icons/back-arrow-round';
import { useUser } from '@/rest/user';
import { useRouter } from 'next/router';

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const { isAuthorized } = useUser();

  if (!isAuthorized) {
    return (
      <div className="relative flex min-h-screen w-full justify-center py-5 md:py-8">
        <button
          className="absolute top-5 left-5 flex h-8 w-8 items-center justify-center text-gray-200 transition-colors hover:text-gray-400 md:top-1/2 md:left-10 md:-mt-8 md:h-16 md:w-16 md:text-gray-300"
          onClick={router.back}
        >
          <BackArrowRound />
        </button>
        <div className="my-auto flex flex-col">
          <LoginView />
        </div>
      </div>
    );
  }
  if (isAuthorized) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  // add your custom loader here, Please note, This loader will be applied as global loader
  return <p>Loading......</p>;
};

export default PrivateRoute;
