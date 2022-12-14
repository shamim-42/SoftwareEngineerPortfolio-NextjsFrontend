import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
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
  const { mutate, isLoading } = useMutation(client.blogData.newBlog, {
    onSuccess: (data) => {
      toast.success('Blog Created Successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
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

  return { addNewBlog: mutate, isLoading };
};
