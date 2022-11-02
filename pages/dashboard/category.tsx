import DashboardLayout from '@/components/layouts/dasboard-layout';
import CategoryUI from '@/components/ui/category/category';
import { useCategory } from '@/rest/main-hook';

const Category = () => {
  const { categoryList } = useCategory();

  console.log(categoryList);

  return (
    <DashboardLayout>
      <CategoryUI categories={categoryList} />
    </DashboardLayout>
  );
};

export default Category;
