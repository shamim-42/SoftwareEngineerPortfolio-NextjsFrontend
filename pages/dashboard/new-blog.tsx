import DashboardLayout from '@/components/layouts/dasboard-layout';
import NewBlog from '@/components/ui/blog/newBlog';
import { useNewBlog } from '@/rest/blog';
import client from '@/rest/client';
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
  const [thumbnail, setThumbnail] = useState('');
  const { categoryList } = useCategory();
  const { addNewBlog, isLoading } = useNewBlog();

  const uploadThumbnail = (e: { target: { files: (string | Blob)[] } }) => {
    const formData = new FormData();
    if (e.target.files[0]) {
      formData.append('files', e.target.files[0]);
      client.media.thumbnail(formData).then((res: any) => {
        if (res[0]?.url) {
          setThumbnail(res[0]?.url);
        }
      });
    }
  };

  function onSubmit(data: NewData) {
    if (!thumbnail || !blogText) {
      return;
    }
    const newData = {
      data: {
        title: data.title,
        thumbnail: thumbnail,
        shortDescription: data.shortDescription,
        content: blogText,
        category: data.category,
      },
    };
    addNewBlog(newData);
    reset();
    setBlogText('');
    setThumbnail('');
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
        uploadThumbnail={uploadThumbnail}
        thumbnail={thumbnail}
      />
    </DashboardLayout>
  );
};

newBlog.authenticationRequired = true;

export default newBlog;
