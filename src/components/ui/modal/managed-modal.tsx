import Modal from '@/components/ui/modal/modal';
import dynamic from 'next/dynamic';
import CreateCategory from '../category/createCategory';
import { useModalAction, useModalState } from './modal.context';
const Login = dynamic(() => import('@/components/auth/login-form'), {
  ssr: false,
});
const Register = dynamic(() => import('@/components/auth/register-form'));
const ForgotPassword = dynamic(
  () => import('@/components/auth/forgot-password')
);

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  console.log(data);

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === 'LOGIN_VIEW' && <Login />}
      {view === 'REGISTER' && <Register />}
      {view === 'FORGOT_VIEW' && <ForgotPassword />}
      {view === 'CATEGORY_FORM' && <CreateCategory />}
    </Modal>
  );
};

export default ManagedModal;
