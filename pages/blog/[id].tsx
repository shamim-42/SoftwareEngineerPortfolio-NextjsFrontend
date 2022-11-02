import GeneralLayout from '@/components/layouts/_general';
import ViewBlogUI from '@/components/ui/blog/viewBlog';
import { getStaticProps } from '@/rest/home-page.ssr';
import { InferGetStaticPropsType } from 'next';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
export { getStaticPaths, getStaticProps } from '@/rest/dynamic-blog-page.ssr';

const ViewBlog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  pageProps
) => {
  return (
    <>
      <ViewBlogUI blog={pageProps?.blog?.data?.attributes} />
    </>
  );
};

ViewBlog.getLayout = function getLayout(
  page:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
) {
  return <GeneralLayout withFooter>{page}</GeneralLayout>;
};

export default ViewBlog;
