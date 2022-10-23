/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
import MCButton from "../../utils/components/MCStyled/mcButton";

import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

import field from "../../styles/mc/TextField.module.css";
import btn from "../../styles/mc/Button.module.css";
import { FormProvider, useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import DefaultForm from "../../utils/components/form/defaultForm";
import ModForm from "../../utils/components/form/modForm";
import TagForm from "../../utils/components/form/tagForm";
import { useTagFormStore } from "../../utils/zustand/tagFormStore";
import { InsertServer } from "../../utils/components/fetch/insertServer";
import UserInfoForm from '../../utils/components/form/userinfoForm';

const server: NextPage = ({}) => {
  const formprovider = useForm();
  const {Tags,SetTags} = useTagFormStore()
  
  /**
   * 서버에 제출
   * @param data
   * @returns
   */
  const onSubmit = async (data: any) => {
    const datas= { ...data, tags : Tags}
    console.log(datas)
    await InsertServer(datas).then((x) =>{
      alert(x.data.message)
    })
  };

  /**
   * 들어가야 할것 :
   * md
   * 로그인 ID, PW
   * Tag
   */
  return (
    <MCstyledLayout>
      <div className="flex flex-col items-center align-middle top-20 relative">
        <div className="w-auto ">
          <p className="text-center">ADD SERVER</p>
          <FormProvider {...formprovider}>
            <form onSubmit={formprovider.handleSubmit(onSubmit)} id="asdasd" className="space-y-4">
              <DefaultForm/>
              {/* 모드 타입 선택 */}
              {/* <ModForm/> */}
              {/* 태그 선택 */}
              <TagForm/>
              {/* 유저 정보 */}
              <UserInfoForm/>
              {/* 전송 */}
              <div className="h-[40px] my-4">
                <input type="submit" className={btn.McButton} />
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
