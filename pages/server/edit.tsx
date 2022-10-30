import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import MCButton from "../../utils/components/MCStyled/mcButton";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

const index = ({ name }: { name: string }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const editFormProvider = useForm();
  const onSubmit = async (data : any) =>{
    const dats = {...data}
    const url = name
  }


  return (
    <MCstyledLayout>
      <div className="flex align-middle justify-center">
        <FormProvider {...editFormProvider}>
            <form onSubmit={editFormProvider.handleSubmit(onSubmit)}>
                
            </form>



        </FormProvider>

        <div className="h-10 mt-4">
          <Link href="/">
            <MCButton>Back</MCButton>
          </Link>
        </div>
      </div>
    </MCstyledLayout>
  );
};

index.getInitialProps = async ({ query }: { query: any }) => {
  const { name } = query;
  return { name };
};

export default index;
