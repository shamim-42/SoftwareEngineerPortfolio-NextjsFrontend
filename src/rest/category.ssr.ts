import type { CategoryPageProps } from '@/types';
import type { GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';

export const getStaticProps: GetStaticProps<CategoryPageProps> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORY],
    client.categoryData.all
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORY],
    client.categoryData.all
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 120,
  };
};
