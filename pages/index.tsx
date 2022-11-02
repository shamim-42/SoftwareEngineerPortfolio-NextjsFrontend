import HomePage from '@/components/layouts/home-page';
import HomeLayout from '@/components/layouts/_home';
import { API_ENDPOINTS } from '@/rest/client/api-endpoints';
import { getStaticProps } from '@/rest/home-page.ssr';
import { mainAtom } from '@/store/main-atom';
import type { NextPageWithLayout } from '@/types';
import { useAtom } from 'jotai';
import type { InferGetStaticPropsType } from 'next';

export { getStaticProps };

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const [_, setMaindata] = useAtom(mainAtom);

  const educationState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.EDUCATION
  );

  const skillState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.SKILLS
  );

  const experienceState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.EXPERIENCE
  );

  const basicState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.BASIC_DATA
  );

  const blogState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.BLOGS
  );

  const education = educationState?.state?.data?.data ?? null;
  const skills = skillState?.state?.data?.data ?? null;
  const experience = experienceState?.state?.data?.data ?? null;
  const blogs = blogState?.state?.data?.data ?? null;
  const basicData = basicState?.state?.data?.data[0]?.attributes ?? null;
  console.log(basicState?.state?.data?.data[0]?.attributes)
  setMaindata(basicData);

  return (
    <HomePage
      educationData={education}
      experience={experience}
      skills={skills}
      basicData={basicData}
      blogs={blogs}
    />    
  );
};

Home.getLayout = function getLayout(page) {
  const basicState = page.props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.BASIC_DATA
  );

  const basicData = basicState?.state?.data?.data[0]?.attributes ?? null;

  return <HomeLayout basicData={basicData}>{page}</HomeLayout>;
};

export default Home;
