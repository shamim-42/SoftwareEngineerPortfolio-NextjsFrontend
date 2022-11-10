import DashboardLayout from '@/components/layouts/dasboard-layout';
import ManageUI from '@/components/ui/manage/manageUI';
import { getStaticProps } from '@/rest/blog-page.ssr';
import client from '@/rest/client';
import { API_ENDPOINTS } from '@/rest/client/api-endpoints';
import { useState } from 'react';
import { toast } from 'react-toastify';
export { getStaticProps };

const ManageBlog = (props: { dehydratedState: { queries: any[] } }) => {
  const blogState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.BLOGS
  );
  const blogs = blogState?.state?.data?.data ?? null;
  const [allBlog, setAllBlog] = useState(blogs);

  const deleteBlog = (id: number) => {
    client.blogData.deleteBlog(id).then((res: any) => {
      console.log(res);
      if (res?.data) {
        toast.success('Blog Deleted Successfully!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        setAllBlog((prev: any[]) => {
          const blogs = prev.filter((blog: { id: number }) => blog.id !== id);
          return blogs;
        });
      } else if (res?.error) {
        console.log(res?.error);
      }
    });
  };

  return (
    <DashboardLayout>
      <ManageUI blogs={allBlog} deleteBlog={deleteBlog} />
    </DashboardLayout>
  );
};

export default ManageBlog;
