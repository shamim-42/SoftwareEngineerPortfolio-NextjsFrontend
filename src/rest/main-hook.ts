import { useQuery } from 'react-query';
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
