import Alert from '@/components/ui/alert';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useLogin } from '@/rest/user';
import type { LoginUserInput } from '@/types';
import { useRouter } from 'next/router';
import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
  identifier: yup
    .string()
    .required('You must need to provide your username or email address'),
  password: yup.string().required('Password is Required!'),
});

function LoginForm() {
  const router = useRouter();
  const { openModal } = useModalAction();
  const { mutate: login, isLoading, serverError, setServerError } = useLogin();

  function onSubmit({ identifier, password }: LoginUserInput) {
    login({
      identifier,
      password,
    });
    router.back();
  }

  return (
    <>
      <Alert
        variant="error"
        message={serverError && serverError}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      <Form<LoginUserInput>
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label="Username or Email"
              {...register('identifier')}
              type="text"
              variant="outline"
              className="mb-5"
              error={errors.identifier?.message!}
            />
            <PasswordInput
              label="Password"
              {...register('password')}
              error={errors.password?.message!}
              variant="outline"
              className="mb-5"
              forgotPageRouteOnClick={() => openModal('FORGOT_VIEW')}
            />
            <div className="mt-8">
              <Button
                className="h-11 w-full sm:h-12"
                loading={isLoading}
                disabled={isLoading}
              >
                Login
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* //===============// */}
      <div className="relative mt-6 mb-4 flex flex-col items-center justify-center text-sm text-heading sm:mt-8 sm:mb-6">
        <hr className="w-full" />
        <span className="absolute -top-2.5 left-2/4 -ml-5 bg-light px-2">
          Or
        </span>
      </div>

      <div className="text-center text-sm text-body sm:text-base">
        Don't have any account?{' '}
        <button
          onClick={() => openModal('REGISTER')}
          className="ml-1 font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none"
        >
          Register
        </button>
      </div>
    </>
  );
}

export default function LoginView() {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[520px] md:rounded-xl">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold">Admin Login</h2>
      </div>
      <p className="mt-4 mb-8 text-center text-sm text-body sm:mt-5 sm:mb-10 md:text-base">
        Login with your username or email &amp; password
      </p>
      <LoginForm />
    </div>
  );
}
