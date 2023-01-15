
import { IHelmet } from "../../API/IHelmet";
import React from "react";
import DelForm from '../../components/form/edit/delForm';
import { FormProvider, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import MCButton from '../../components/MCStyled/mcButton';
import UserInfoForm from '../../components/form/userinfoForm';
import DefaultForm from '../../components/form/defaultForm';
import TagForm from '../../components/form/tagForm';
import axios from 'axios';
import { useTagFormStore } from "../../zustand/tagFormStore";

import btn from "../../styles/mc/Button.module.css"

const ServerEdit = () => {
    let { name } = useParams();

  
  
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

  const onSubmit = async (data: any) => {
    console.log(data);
    const datas = { ...data };
    const tags = [...Tags];

    let s_data = JSON.parse(JSON.stringify(datas));
    s_data.custom.tags = tags ?? [];

    await axios.post(`${import.meta.env.VITE_BASE_API_URL}`,s_data).then((x) => {
      alert(x.data.message);
      if(x.data.success){
       window.location.href = "/";
      }
    });
  };
  const head: IHelmet = {
    title: `${name} - 수정`,
  };

  return (
    <div>
      <div className="flex flex-col items-center align-middle top-20 relative">
        <div className="w-auto">
          <p className="text-center">서버 수정</p>
          <p className="text-center text-xl my-1">{name}</p>
          <p className="text-center">현재 수정하기 같은 경우 지원되긴 하나, 좀 불편합니다.</p>
          <FormProvider {...editFormProvider}>
            <form
              onSubmit={editFormProvider.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <DefaultForm isEdit={true} hostname={name} />
              <TagForm />
              <UserInfoForm />
              <div className="h-[40px] my-4">
                <input
                  type="submit"
                  className={btn.McButton}
                  value="수정하기"
                />
              </div>
            </form>
          </FormProvider>
          <DelForm hostname={name} />

          <div className="h-10 mt-4">
            <Link to="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerEdit;