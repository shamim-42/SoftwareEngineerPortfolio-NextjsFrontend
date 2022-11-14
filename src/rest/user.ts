import {
  initialState,
  updateFormState,
} from '@/components/auth/forgot-password';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useToken } from '@/lib/hooks/use-token';
import { authorizationAtom } from '@/store/authorization-atom';
import type { ChangePasswordUserInput, RegisterUserInput } from '@/types';
import { useAtom } from 'jotai';
import { useStateMachine } from 'little-state-machine';
import { signOut as socialLoginSignOut } from 'next-auth/react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import client from './client';

export function useLogin() {
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);

  const { mutate, isLoading } = useMutation(client.users.login, {
    onSuccess: (data) => {
      if (!data.jwt) {
        setServerError('The credentials was wrong!');
        return;
      }
      setToken(data.jwt);
      setAuthorized(true);
      closeModal();
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  return { mutate, isLoading, serverError, setServerError };
}

export function useSocialLogin() {
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  return useMutation(client.users.socialLogin, {
    onSuccess: (data) => {
      if (data?.token && data?.permissions?.length) {
        setToken(data?.token);
        setAuthorized(true);
        return;
      }
      if (!data.token) {
        toast.error('The credentials was wrong!');
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
}

export function useRegister() {
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  let [formError, setFormError] = useState<Partial<RegisterUserInput> | null>(
    null
  );

  const { mutate, isLoading } = useMutation(client.users.register, {
    onSuccess: (data) => {
      if (data?.token && data?.permissions?.length) {
        setToken(data?.token);
        setAuthorized(true);
        closeModal();
        return;
      }
      if (!data.token) {
        toast.error('The credentials was wrong!');
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      setFormError(data);
    },
  });

  return { mutate, isLoading, formError, setFormError };
}

export function useLogout() {
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  const { mutate: signOut } = useMutation(client.users.logout, {
    onSuccess: (data) => {
      if (data) {
        setToken('');
        setAuthorized(false);
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });

  function handleLogout() {
    socialLoginSignOut({ redirect: false });
    signOut();
  }
  return {
    mutate: handleLogout,
  };
}

export const useContact = () => {
  return useMutation(client.users.contactUs, {
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
export function useChangePassword() {
  let [formError, setFormError] =
    useState<Partial<ChangePasswordUserInput> | null>(null);

  const { mutate, isLoading } = useMutation(client.users.changePassword, {
    onSuccess: (data) => {
      if (!data.success) {
        setFormError({
          oldPassword: data?.message ?? '',
        });
        return;
      }
      toast.success('Password changed successfully');
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};
      setFormError(data);
    },
  });

  return { mutate, isLoading, formError, setFormError };
}

export function useForgotPassword() {
  const { actions } = useStateMachine({ updateFormState });
  let [message, setMessage] = useState<string | null>(null);
  let [formError, setFormError] = useState<any>(null);

  const { mutate, isLoading } = useMutation(client.users.forgotPassword, {
    onSuccess: (data, variables) => {
      if (!data.success) {
        setFormError({
          email: data?.message ?? '',
        });
        return;
      }
      setMessage(data?.message!);
      actions.updateFormState({
        email: variables.email,
        step: 'Token',
      });
    },
  });

  return { mutate, isLoading, message, formError, setFormError, setMessage };
}

export function useResetPassword() {
  const queryClient = useQueryClient();
  const { openModal } = useModalAction();
  const { actions } = useStateMachine({ updateFormState });

  return useMutation(client.users.resetPassword, {
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Successfully Reset Password!');
        actions.updateFormState({
          ...initialState,
        });
        openModal('LOGIN_VIEW');
        return;
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
}

export function useVerifyForgotPasswordToken() {
  const { actions } = useStateMachine({ updateFormState });
  const queryClient = useQueryClient();
  let [formError, setFormError] = useState<any>(null);

  const { mutate, isLoading } = useMutation(
    client.users.verifyForgotPasswordToken,
    {
      onSuccess: (data, variables) => {
        if (!data.success) {
          setFormError({
            token: data?.message ?? '',
          });
          return;
        }
        actions.updateFormState({
          step: 'Password',
          token: variables.token as string,
        });
      },
      onSettled: () => {
        queryClient.clear();
      },
    }
  );

  return { mutate, isLoading, formError, setFormError };
}
