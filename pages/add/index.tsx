import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import MCButton from "../../utils/components/MCStyled/mcButton";

import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

import field from "../../styles/mc/TextField.module.css";
import btn from "../../styles/mc/Button.module.css";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

const server: NextPage = ({}) => {

  const tags = ["장타","단타","야생","모드"]

  const FILE_TYPE = [
    {
      type: "default",
      name : "None"
    },
    {
      type : "instance",
      name : "CurseForge Instanec"
    },
    {
      type : "zip",
      name : "Zip File"
    }
  ]


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const onSubmit = (data: any) => console.log(data);



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [md, setMd] = useState<string>("");

  /**
   * 들어가야 할것 :
   * md
   * 로그인 ID, PW
   * Tag
   */
  return (
    <MCstyledLayout>
      <div className="flex flex-col items-center align-middle top-80 relative">
        <div className="w-auto ">
          <p className="text-center">ADD SERVER</p>
          {/*           <div className="my-4">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="asdasd"
            className="space-y-4"
          >

            <h1>서버 주소</h1>
            <input type="text" className={field.McField} {...register("address",{ required : true})}/>
            {errors.address && <span>주소는 힐수 입력 사항입니다.</span>}
            <p>마크다운을 활용하여 자신의 서버를 소개해 보세요. [WIP]</p>
            <div className="flex flex-row justify-between">
              <textarea className={field.McField} {...register("md")} onChange={x => setMd(x.target.value)}/>
            {/*  미리보기
                <ReactMarkdown className="prose prose-p:text-black bg-white prose-hr:my-[5px] prose-hr:border-black" >
                  {md}
                </ReactMarkdown> */}
            </div>
            {/* 압축파일 타입 선택 */}
            <h2>선택해주세요!</h2>
            {/* 색깔 바꾸기 */}
            <div className="flex flex-row space-x-4 outline outline-2 bg-black outline-gray-500 p-1">
              {
                FILE_TYPE.map((x,i) => (
                  <div key={i} className="relative space-x-3 block w-full text-center">
                     <input type="radio" value={x.type} {...register("FileType")}
                      className="cursor-pointer" id={`type_file_${i}`}
                     />
                     <label htmlFor={`type_file_${i}`} className="cursor-pointer">{x.name}</label>
                  </div>
                ))
                }
            </div>
            <div className="flex flex-row space-x-1">
              <label htmlFor="zip_file" className={`${btn.McButton}`}>파일 선택</label> 
              <input type="file" id="zip_file" accept=".zip" placeholder="<- 누르셈"/>
            </div>
            
            <div className="h-[40px] my-4">
              <input type="submit" className={btn.McButton} />
            </div>
          </form>

          <div className="h-10 mt-4">
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dump-input{
            width : 100%;
            position : absolute;
            height : 100%;
            opacity : 0;
            z-index : 9999;
            left : 0;
            margin : 0 !important;
          }


        `}
      </style>
    </MCstyledLayout>
  );
};
export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
export default server;
