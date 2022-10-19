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

const server: NextPage = ({}) => {
  const formprovider = useForm();
  const {TagList,SetTag} = useTagFormStore()
  
  /**
   * 서버에 제출
   * @param data
   * @returns
   */
  const onSubmit = (data: any) => console.log({ ...data, tags : TagList});

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
          {/*  기존 서버 입력 방법
          <div className="my-4">
            <MCTextField onChange={(x) => HandleOnChange(x.target)} />
          </div>
          <div>
          
            <TagSelect />
          </div>
          <div className="my-4 h-10">
            <MCButton
              onClick={async () =>
                await InsertServer(server).then((x) => alert("Done!"))
              }
            >
              Add Server
            </MCButton>
          </div>
 */}
          <FormProvider {...formprovider}>
            <form onSubmit={formprovider.handleSubmit(onSubmit)} id="asdasd" className="space-y-4">
              <DefaultForm/>
              {/* 압축파일 타입 선택 */}
              <ModForm/>
              {/* 태그 선택 */}
              <TagForm/>
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
