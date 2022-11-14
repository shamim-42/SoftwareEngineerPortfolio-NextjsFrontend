import DashboardLayout from '@/components/layouts/dasboard-layout';
import CategoryUI from '@/components/ui/category/category';
import { getStaticProps } from '@/rest/category.ssr';
import client from '@/rest/client';
import { API_ENDPOINTS } from '@/rest/client/api-endpoints';
import { useState } from 'react';
import { toast } from 'react-toastify';
export { getStaticProps };

const Category = (props: { dehydratedState: { queries: any[] } }) => {
  const categoryState = props.dehydratedState?.queries.find(
    (item: any) => item.queryKey[0] === API_ENDPOINTS.CATEGORY
  );
  const category = categoryState?.state?.data?.data ?? null;
  const [categories, setCategories] = useState(category);

  const deleteCategory = (id: number) => {
    client.categoryData.deleteCategory(id).then((res: any) => {
      if (res?.data) {
        toast.success('Category Deleted Successfully!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        setCategories((prev: any[]) => {
          const categories = prev.filter(
            (category: { id: number }) => category.id !== id
          );
          return categories;
        });
      } else if (res?.error) {
        console.log(res?.error);
      }
    });
  };

  return (
    <DashboardLayout>
      <CategoryUI categories={categories} deleteCategory={deleteCategory} />
    </DashboardLayout>
  );
};

Category.authenticationRequired = true;

export default Category;
