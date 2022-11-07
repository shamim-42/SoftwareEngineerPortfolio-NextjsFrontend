import DashboardLayout from '@/components/layouts/dasboard-layout';
import NewBlog from '@/components/ui/blog/newBlog';
import { useNewBlog } from '@/rest/blog';
import { useCategory } from '@/rest/main-hook';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface NewData {
  title: string;
  thumbnail: string;
  shortDescription: string;
  category: string;
}

// const blogFormSchema = yup.object().shape({
//   title: yup
//     .string()
//     .required('You must need to provide your username or email address'),
// });

const newBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const [blogText, setBlogText] = useState('');
  const { categoryList } = useCategory();
  const { addNewBlog, isLoading } = useNewBlog();

  function onSubmit(data: NewData) {
    const newData = {
      data: {
        title: data.title,
        thumbnail: data.thumbnail,
        shortDescription: data.shortDescription,
        content: blogText,
        category: data.category,
      },
    };
    addNewBlog(newData);
    reset();
  }

  return (
    <DashboardLayout>
      <NewBlog
        categories={categoryList}
        setBlogText={setBlogText}
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </DashboardLayout>
  );
};

export default newBlog;
