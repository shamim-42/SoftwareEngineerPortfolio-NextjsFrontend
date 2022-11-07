import Button from '@/components/ui/button';
import Input from '@/components/ui/forms/input';
import TextEditor from '../editor/editor';

export default function NewBlog({
  categories,
  setBlogText,
  onSubmit,
  handleSubmit,
  register,
  isLoading,
}: any) {
  return (
    <div className="mx-auto flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 drop-shadow-lg sm:p-8 md:h-auto md:min-h-0 md:max-w-[790px] md:rounded-xl">
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <></>
          <Input
            label="Title"
            {...register('title', { required: true })}
            type="text"
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Thumbnail URL"
            {...register('thumbnail', { required: true })}
            type="file"
            variant="outline"
            className="mb-5 "
          />

          {/* <label
            className="mb-2 block text-sm font-medium text-gray-900 "
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none "
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
          <div className="mt-1 text-sm text-gray-500 " id="user_avatar_help">
            A profile picture is useful to confirm your are logged into your
            account
          </div> */}

          <Input
            label="Short Description"
            {...register('shortDescription', { required: true })}
            type="text"
            variant="outline"
            className="mb-5"
            dimension="big"
          />

          <div className="w-96">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Select a Category
            </label>
            <select
              id="category"
              name="category"
              {...register('category', { required: true })}
              className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              defaultValue="#"
            >
              <option value="#" disabled hidden>
                Choose a Category
              </option>
              {categories?.length > 0 &&
                categories?.map(
                  (category: {
                    id: number;
                    attributes: {
                      name: string;
                    };
                  }) => (
                    <option key={category.id} value={category.id}>
                      {category?.attributes?.name}
                    </option>
                  )
                )}
            </select>
          </div>

          <TextEditor setBlogText={setBlogText} />

          <div className="mt-8">
            <Button
              loading={isLoading}
              disabled={isLoading}
              className="h-11 w-full sm:h-12"
            >
              Create Blog
            </Button>
          </div>
        </form>
      </>
    </div>
  );
}
