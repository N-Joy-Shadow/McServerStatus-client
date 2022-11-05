/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { EditServer} from "../../utils/components/fetch/insertServer";
import DefaultForm from "../../utils/components/form/defaultForm";
import TagForm from "../../utils/components/form/tagForm";
import UserInfoForm from "../../utils/components/form/userinfoForm";
import MCButton from "../../utils/components/MCStyled/mcButton";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { useTagFormStore } from "../../utils/zustand/tagFormStore";
import { HeadProps } from "../../API/HeadProps";
import btn from "../../styles/mc/Button.module.css";
import DelForm from "../../utils/components/form/edit/delForm";
import { useRouter } from "next/router";

export default function edit() {
  const router = useRouter();
  const { name } = router.query;
  let name_s: string = "로딩중..";
  let gallurl: string = "로딩중..";
  if (typeof name == "string") {
    name_s = name;
  }
  /* useEffect(() => {
    if(typeof name == "string" ){
      const call = async () => await EditServerData(name)
      call().then((x) =>{
        gallurl = x.data.custom.gallurl
      })
    }
  
  }) */

  const editFormProvider = useForm();
  const { Tags, SetTags } = useTagFormStore();

  const onSubmit =async  (data: any) => {
    console.log("hi")
    const datas = { ...data };
    const tags = [...Tags];

    let s_data = JSON.parse(JSON.stringify(datas));
    s_data.custom.tags = tags;

    await EditServer(s_data).then((x) => {
      alert(x.data.message);
      window.location.href = "/";
    });
  };
  const head: HeadProps = {
    title: `${name} - 수정`,
  };

  return (
    <MCstyledLayout head={head}>
      <div className="flex flex-col items-center align-middle top-20 relative">
        <div className="w-auto">
          <p className="text-center">Edit SERVER</p>
          <p className="text-center">{name}</p>
          <FormProvider {...editFormProvider}>
            <form
              onSubmit={editFormProvider.handleSubmit(onSubmit)}
              className="space-y-4"
            >

              <DefaultForm isEdit={true} hostname={name_s} />
              <TagForm />
              <UserInfoForm />
              <div className="h-[40px] my-4">
                <input type="submit" className={btn.McButton} value="수정하기" />
              </div>
            </form>
          </FormProvider>
          <DelForm hostname={name_s} />

          <div className="h-10 mt-4">
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
        </div>
      </div>
    </MCstyledLayout>
  );
};

