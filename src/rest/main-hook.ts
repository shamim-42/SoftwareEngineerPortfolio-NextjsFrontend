import { useModalAction } from '@/components/ui/modal/modal.context';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import client from './client';

export const useCategory = () => {
  const { isLoading, error, data } = useQuery(
    ['categoryData'],
    client.categoryData.all
  );

  const categoryList = data?.data;

  // console.log(categoryList);

  return { categoryList };
};

export const useNewCategory = () => {
  const { closeModal } = useModalAction();
  const [newCategory, setNewCategory] = useState({});
  const { mutate, isLoading } = useMutation(client.categoryData.newCategory, {
    onSuccess: (data) => {
      setNewCategory(data?.data);
      toast.success('Category Created Successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      closeModal();
    },
    onError: (error: Error) => {
      toast.error(error?.message || 'Something went wrong!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      console.log(error.message);
    },
  });

  return { addNewCategory: mutate, isLoading, newCategory };
};
