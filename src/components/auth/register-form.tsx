import { useRouter } from 'next/router';
import Logo from '@/components/ui/logo';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import type { RegisterUserInput } from '@/types';
import * as yup from 'yup';
import { useRegister } from '@/rest/user';

const registerFormSchema = yup.object().shape({
  fullName: yup.string().required('You must need to provide an username'),
  email: yup
    .string()
    .email('The provided email address format is not valid')
    .required('You must need to provide your email address'),
  password: yup.string().required('Password is Required!'),
});

function RegisterForm() {
  const { openModal } = useModalAction();
  const { mutate, isLoading, formError } = useRegister();

  function onSubmit({ fullName, email, password }: RegisterUserInput) {
    mutate({
        fullName,
        email,
        password,
    });
  }

  return (
    <>
      <Form<RegisterUserInput>
        onSubmit={onSubmit}
        validationSchema={registerFormSchema}
        serverError={formError}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label={'Username'}
              {...register('fullName')}
              variant="outline"
              className="mb-5"
              error={errors.fullName?.message!}
            />
            <Input
              label={'Email'}
              {...register('email')}
              type="email"
              variant="outline"
              className="mb-5"
              error={errors.email?.message!}
            />
            <PasswordInput
              label={'Password'}
              {...register('password')}
              error={errors.password?.message!}
              variant="outline"
              className="mb-5"
            />
            <div className="mt-8">
              <Button
                className="h-12 w-full"
                loading={isLoading}
                disabled={isLoading}
              >
                Create Account
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* End of forgot register form */}

      <div className="relative mt-6 mb-4 flex flex-col items-center justify-center text-sm text-heading sm:mt-8 sm:mb-6">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-light px-2 left-2/4 -ml-5">
          Or
        </span>
      </div>
      <div className="text-center text-sm text-body sm:text-base">
        {'Already have an account?'}{' '}
        <button
          onClick={() => openModal('LOGIN_VIEW')}
          className="font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1"
        >
          Login
        </button>
      </div>
    </>
  );
}
export default function RegisterView() {
  const router = useRouter();
  const { closeModal } = useModalAction();
  function handleNavigate(path: string) {
    router.push(`/${path}`);
    closeModal();
  }

  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="mt-4 mb-7 px-2 text-center text-sm leading-relaxed text-body sm:mt-5 sm:mb-10 sm:px-0 md:text-base">
      By signing up, you agree to our
        <span
          onClick={() => handleNavigate('terms')}
          className="mx-1 cursor-pointer text-accent underline hover:no-underline"
        >
          terms
        </span>
        &amp;&nbsp;
        <span
          onClick={() => handleNavigate('privacy')}
          className="cursor-pointer text-accent underline hover:no-underline ltr:ml-1 rtl:mr-1"
        >
          policy
        </span>
      </p>
      <RegisterForm />
    </div>
  );
}
