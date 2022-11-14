import LoginView from '@/components/auth/login-form';
import { BackArrowRound } from '@/components/icons/back-arrow-round';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

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
};

export default LoginPage;
