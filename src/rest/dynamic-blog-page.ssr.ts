// import type { CategoryQueryOptions, Product } from '@/types';
import { BlogType } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import client from './client';

type ParsedQueryParams = {
  id: string;
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async () => {
  const { data }: any = await client.blogData.all();

  const paths = data?.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

type PageProps = {
  blog: BlogType;
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const { id } = params!; //* we know it's required because of getStaticPaths
  const stringId = id.toString();

  try {
    const blog = await client.blogData.getByID(stringId);
    return {
      props: {
        blog,
      },
      revalidate: 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
