import RegisterView from '@/components/auth/register-form';
import HomeLayout from '@/components/layouts/_home';
import SectionBlock from '@/components/ui/section-block';
import type { NextPage } from 'next';


const SignUp: NextPage = () => {
  return (
    <SectionBlock className={"justify-center items-center"}>
        <RegisterView />
    </SectionBlock>
  );
};
export default SignUp;