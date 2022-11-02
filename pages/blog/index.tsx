import GeneralLayout from '@/components/layouts/_general';
import BlogPage from '@/components/ui/blogPage/blogPage';
import SectionBlock from '@/components/ui/section-block';
import { getStaticProps } from '@/rest/blog-page.ssr';
import { API_ENDPOINTS } from '@/rest/client/api-endpoints';
import { JSXElementConstructor, ReactElement } from 'react';
export { getStaticProps };

const Blog = (props: { dehydratedState: { queries: any[] } }) => {
  const blogState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.BLOGS
  );

  const blogs = blogState?.state?.data?.data ?? null;

  return (
    <>
      <SectionBlock>
        <BlogPage blogs={blogs} />
      </SectionBlock>
    </>
  );
};

Blog.getLayout = function getGeneralLayout(
  page: ReactElement<any, string | JSXElementConstructor<any>>
) {
  return <GeneralLayout withFooter>{page}</GeneralLayout>;
};

export default Blog;
