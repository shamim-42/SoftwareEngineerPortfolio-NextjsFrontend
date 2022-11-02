import { Key } from 'react';
import Alert from '../alert';
import TextEditor from '../editor/editor';
import Input from '../forms/input';

const NewBlogUI = ({
  blogText,
  categories,
  setBlogText,
  handleChange,
  onSubmitBlog,
  success,
}: any) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="mb-2 block text-xl font-medium text-gray-900 "
        >
          Blog Title
        </label>
        <Input
          type="text"
          name="title"
          onBlur={handleChange}
          id="default-input"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="mb-2 block text-xl font-medium text-gray-900 "
        >
          Blog Thumbnail URL
        </label>
        <Input
          type="text"
          name="thumbnail"
          onBlur={handleChange}
          id="default-input"
        />
      </div>
      <div className="w-96">
        <label
          htmlFor="small"
          className="mb-2 block text-xl font-medium text-gray-900 "
        >
          Select a Category
        </label>
        <select
          id="small"
          name="category"
          onChange={handleChange}
          className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        >
          {categories?.length > 0 &&
            categories?.map(
              (category: {
                id: Key;
                attributes: {
                  name: string;
                };
              }) => (
                <option key={category.id} value={category?.attributes?.name}>
                  {category?.attributes?.name}
                </option>
              )
            )}
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="mb-2 block text-xl font-medium text-gray-900 "
        >
          Short Description
        </label>
        <input
          type="text"
          name="shortDescription"
          onBlur={handleChange}
          id="large-input"
          className="sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <TextEditor setBlogText={setBlogText} />
      <div className="my-5 flex justify-center">
        <button
          type="button"
          onClick={onSubmitBlog}
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 "
        >
          Create Blog
        </button>
      </div>
      {success && (
        <Alert className="mb-4" message="Blog Created Successfully" />
      )}
      <div className="my-5">
        <h2 className="p-2 text-center text-2xl font-bold">Preview</h2>
        <div
          dangerouslySetInnerHTML={{ __html: blogText.content }}
          className="border p-5"
        />
      </div>
    </div>
  );
};

export default NewBlogUI;
