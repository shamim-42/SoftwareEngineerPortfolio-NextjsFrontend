import '@/assets/css/main.css';
import SocialLogin from '@/components/auth/social-login';
import DefaultSeo from '@/components/seo/default-seo';
import ManagedDrawer from '@/components/ui/drawer/managed-drawer';
import ManagedModal from '@/components/ui/modal/managed-modal';
import { ModalProvider } from '@/components/ui/modal/modal.context';
import PrivateRoute from '@/lib/private-route';
import QueryProvider from '@/rest/client/query-provider';
import { NextPageWithLayout } from '@/types';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const authenticationRequired = Component.authenticationRequired ?? false;

  return (
    <SessionProvider session={session}>
      <QueryProvider pageProps={pageProps}>
        <ModalProvider>
          <>
            <DefaultSeo />
            {authenticationRequired ? (
              <PrivateRoute>
                {getLayout(<Component {...pageProps} />)}
              </PrivateRoute>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
            <ManagedModal />
            <ManagedDrawer />
            <ToastContainer autoClose={2000} theme="colored" />
            <SocialLogin />
          </>
        </ModalProvider>
      </QueryProvider>
    </SessionProvider>
  );
}
export default CustomApp;
