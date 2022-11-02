import DashboardLayout from '@/components/layouts/dasboard-layout';
import TestForm from '@/components/ui/blog/testForm';
import { useNewBlog } from '@/rest/blog';
import { useCategory } from '@/rest/main-hook';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const blogFormSchema = yup.object().shape({
  title: yup
    .string()
    .required('You must need to provide your username or email address'),
});

const newBlog = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(blogFormSchema),
  });
  const [blogText, setBlogText] = useState('');
  const { categoryList } = useCategory();
  const { addNewBlog, isLoading, success, error, setError } = useNewBlog();

  function onSubmit(data: {
    title: string;
    thumbnail: string;
    shortDescription: string;
    category: string;
  }) {
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

  useEffect(() => {
    console.log(blogText);
  }, [blogText]);

  return (
    <DashboardLayout>
      <TestForm
        categories={categoryList}
        setBlogText={setBlogText}
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
        setError={setError}
        success={success}
      />
    </DashboardLayout>
  );
};

export default newBlog;
