import { IHelmet } from "../../API/IHelmet";
import DelForm from "../../components/form/edit/delForm";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import UserInfoForm from "../../components/form/userinfoForm";
import DefaultForm from "../../components/form/defaultForm";
import TagForm from "../../components/form/tagForm";
import axios from "axios";
import { useTagFormStore } from "../../zustand/tagFormStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { ToastEnum } from "../../components/MCStyled/mcToast";
import { McButton } from "../../components/MCStyled/mcStyle";

const ServerEdit = () => {
  let { name } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [s_tags, setSTags] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_API_URL}/status/${name}`)
      .then((x) => {
        console.log(x);
      });
  }, []);

  const editFormProvider = useForm();
  const { Tags, SetTags } = useTagFormStore();

  const onSubmit = async (data: any) => {
    console.log(data);
    const datas = { ...data };
    const tags = [...Tags];

    let s_data = JSON.parse(JSON.stringify(datas));
    s_data.custom.tags = tags ?? [];

    await axios
      .put(`${import.meta.env.VITE_BASE_API_URL}`, s_data)
      .then((x) => {
        if (x.data.success) {
          enqueueSnackbar("성공!", {
            variant: "Toast",
            toastType: ToastEnum.success,
          });

          navigate("/");
        } else {
          enqueueSnackbar(x.data.message, {
            variant: "Toast",
            toastType: ToastEnum.error,
          });
        }
      });
  };
  const head: IHelmet = {
    title: `${name} - 수정`,
  };

  return (
    <>
      <div className="flex flex-col items-center align-middle top-20 relative py-4">
        <div className="w-auto">
          <p className="text-center">서버 수정</p>
          <p className="text-center text-xl my-1">{name}</p>
          <p className="text-center">현재 수정하기 같은 경우 불완정 합니다.</p>
          <p className="text-center">빠른시일 내에 고치도록 하겠습니다.</p>
          <FormProvider {...editFormProvider}>
            <form onSubmit={editFormProvider.handleSubmit(onSubmit)} className="space-y-4">
              <DefaultForm isEdit={true} hostname={name} />
              <TagForm />
              <UserInfoForm />
              <McButton className="h-[40px] my-4" type="submit" value="수정하기" />
            </form>
          </FormProvider>
          <DelForm hostname={name} />

          <Link to="/">
            <McButton className="h-10 mt-4">뒤로가기</McButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServerEdit;
