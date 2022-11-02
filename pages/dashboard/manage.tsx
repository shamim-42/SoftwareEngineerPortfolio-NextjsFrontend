import DashboardLayout from '@/components/layouts/dasboard-layout';
import ManageUI from '@/components/ui/manage/manageUI';
import { getStaticProps } from '@/rest/blog-page.ssr';
import { API_ENDPOINTS } from '@/rest/client/api-endpoints';
export { getStaticProps };
const ManageBlog = (props: { dehydratedState: { queries: any[] } }) => {
  const blogState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.BLOGS
  );
  const blogs = blogState?.state?.data?.data ?? null;
  console.log(blogs);
  return (
    <DashboardLayout>
      <ManageUI blogs={blogs} />
    </DashboardLayout>
  );
};

export default ManageBlog;
