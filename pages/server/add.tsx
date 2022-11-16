/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

import btn from "../../styles/mc/Button.module.css";
import { FormProvider, useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import DefaultForm from "../../utils/components/form/defaultForm";
import ModForm from "../../utils/components/form/add/modForm";
import TagForm from "../../utils/components/form/tagForm";
import { useTagFormStore } from "../../utils/zustand/tagFormStore";
import { InsertServer } from "../../utils/components/fetch/insertServer";
import UserInfoForm from '../../utils/components/form/userinfoForm';
import { HeadProps } from "../../API/HeadProps";
import { useState } from 'react';
import McToggle from "../../utils/components/MCStyled/mcToggle";

const server: NextPage = ({}) => {
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
    await InsertServer(s_data).then((x) =>{
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
  const head : HeadProps = {
    title : `서버 추가`
  }
  
  /**
   * 들어가야 할것 :
   * md
   * 로그인 ID, PW
   * Tag
   */
  return (
    <MCstyledLayout head={head}>
      <div className="flex flex-col items-center align-middle top-20 relative">
        <div className="w-auto">
          <p className="text-center">ADD SERVER</p>
          <McToggle/>
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
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
        </div>
      </div>
    </MCstyledLayout>
  );
};
export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
export default server;
