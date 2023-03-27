import { IHelmet } from "../../API/IHelmet";
import DefualtLayout from "../../layouts/defualtLayout";
import { useForm, FormProvider } from "react-hook-form";
import moment from "moment";
import McTextInput from "../../components/MCStyled/controller/mcTextInput";
import McMultiTextInput from '../../components/MCStyled/controller/mcMultiTextInput';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { ToastEnum } from '../../components/MCStyled/mcToast';
import { McButton } from "../../components/MCStyled/mcStyle";

export default function Login() {
  const helmet: IHelmet = {
    title: "ㅁ?ㄹ",
  };
  const FormMethod = useForm();

  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = (data: any) => {
    const date = moment().format("YYYY-MM-DD");
    data.date = date;
    axios.post(`${import.meta.env.VITE_BASE_API_URL}/notice`,data).then(() =>{
        enqueueSnackbar("일단 넣음",{ variant : "Toast", toastType : ToastEnum.info})
    })
  };
  if (import.meta.env.DEV) {
    return (
      <DefualtLayout helmet={helmet} title="로?그인">
        <FormProvider {...FormMethod}>
          <form
            onSubmit={FormMethod.handleSubmit(onSubmit)}
            className="space-y-4 mt-4 md:h-4"
          >
            <McTextInput name="title" placeholder="제목 (버전)" />
            <McMultiTextInput name="content" placeholder="내용 (마크다운)" />
            <McButton type="submit"/>
          </form>
        </FormProvider> 
      </DefualtLayout>
    );
  } else {
    return <DefualtLayout helmet={helmet} title="로?그인">구현안됨</DefualtLayout>;
  }
}
