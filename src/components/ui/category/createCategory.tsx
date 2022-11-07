import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import { CategoryInput } from '@/types';
import * as yup from 'yup';

const categoryFormSchema = yup.object().shape({
  name: yup.string().required('You must need to provide category name'),
});

export default function CreateCategory() {
  function onSubmit({ name }: any) {
    console.log(name);
  }

  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[520px] md:rounded-xl">
      <p className="text-bold md:text-bold mt-4 mb-8 text-center text-2xl sm:mt-5 sm:mb-10">
        Add New Category
      </p>
      <Form<CategoryInput>
        validationSchema={categoryFormSchema}
        onSubmit={onSubmit}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label="Category Name"
              {...register('name')}
              type="text"
              variant="outline"
              className="mb-5"
              error={errors.name?.message!}
            />
            <div className="mt-8">
              <Button className="h-11 w-full sm:h-12">Add Category</Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
