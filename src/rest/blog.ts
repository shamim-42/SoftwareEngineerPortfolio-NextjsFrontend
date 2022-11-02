import { useState } from 'react';
import { useMutation } from 'react-query';
import client from './client';

// export function useBlog() {
//   const { data, isLoading, error } = useQuery(
//     [API_ENDPOINTS.BLOGS],
//     client.blogData.all,
//     {
//       onError: (err) => {
//         console.log(err);
//       },
//     }
//   );
//   //TODO: do some improvement here
//   return { blog: data, isLoading, error };
// }

export const useNewBlog = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { mutate, isLoading } = useMutation(client.blogData.newBlog, {
    onSuccess: (data) => {
      setSuccess(true);
      console.log(data);
    },
    onError: (error: Error) => {
      setError(error);
      console.log(error.message);
    },
  });

  return { addNewBlog: mutate, isLoading, success, error, setError };
};
