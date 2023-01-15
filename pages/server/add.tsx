
import { useState } from 'react';
import { useSnackbar } from "notistack";
import { useForm, FormProvider } from 'react-hook-form';
import { useTagFormStore } from '../../zustand/tagFormStore';
import { IHelmet } from '../../API/IHelmet';
import React from 'react';
import DefaultForm from '../../components/form/defaultForm';
import TagForm from '../../components/form/tagForm';
import UserInfoForm from '../../components/form/userinfoForm';
import MCButton from '../../components/MCStyled/mcButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

import btn from "../../styles/mc/Button.module.css"
const ServerPush = () => {
  const { enqueueSnackbar } = useSnackbar();
  const formprovider = useForm();
  const {Tags,SetTags} = useTagFormStore()
  const [isSubmit,SetisSubmit] = useState<boolean>(false)
  /**
   * 서버에 제출
   * @param data
   * @returns
   */
  const onSubmit = async (data: any) => {
    SetisSubmit(true)
    const datas= { ...data }
    const tags = [...Tags]

    let s_data = JSON.parse(JSON.stringify(datas))
    s_data.custom.tags = tags
    await axios.post(`${import.meta.env.VITE_BASE_API_URL}/status`,s_data).then((x) =>{
      alert(x.data.message)
      //버튼 Disable 설정
      SetisSubmit(false)
      if(x.data.success){
        window.location.href ="/"
      }


    }).catch((err) =>{
      alert(err)
    })
  };
  const head : IHelmet = {
    title : `서버 추가`
  }
  
  /**
   * 들어가야 할것 :
   * md
   * 로그인 ID, PW
   * Tag
   */
  return (
    <div>
      <div className="flex flex-col items-center align-middle top-20 relative">
        <div className="w-auto">
          <p className="text-center"><strong>서버 추가</strong></p>
          {/* <McToggle/> */}
          <FormProvider {...formprovider}>
            <form onSubmit={formprovider.handleSubmit(onSubmit)} className="space-y-4">
              <DefaultForm isEdit={false}/>
              {/* 모드 타입 선택 */}
              {/* <ModForm/> */}
              {/* 태그 선택 */}
              <TagForm/>
              {/* 유저 정보 */}
              <UserInfoForm/>
              {/* 전송 */}
              <div className="h-[40px] my-4">
                <input type="submit" className={btn.McButton} value="등록하기" disabled={isSubmit}/>
              </div>
            </form>
          </FormProvider>

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

export default ServerPush;