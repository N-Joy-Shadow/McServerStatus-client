import { useFormContext } from "react-hook-form";

import field from "../../../styles/mc/TextField.module.css";
import btn from "../../../styles/mc/Button.module.css";
import { useState } from "react";

interface DefaultFormProps {
  isEdit : boolean
  hostname? : string | string[] | undefined
  gallurl? : string
}

export default function DefaultForm(props : DefaultFormProps) {
  const gall_url = "https://gall.dcinside.com/mgallery/board/view?id=steve"

  const {register,formState : {errors}} = useFormContext();
  const [md, setMd] = useState<string>("");

  return (
    <>
      {/* 서버 주소 입력 */}
      <h1>서버 주소</h1>
      <input
        type="text"
        className={field.McField}

        /* disabled={props.isEdit} */
        {...register("url", { required: true })}
      />
      {(errors.url && !props.isEdit) && (
        <span className=" text-red-600">
          <strong>주소는 필수 입력 사항입니다!</strong>
        </span>
      )}
      {/* 갤 주소 입력 */}
      <h1>스티브 갤러리 서버홍보 게시물 주소</h1>
      <input
        type="text"
        className={field.McField}
        placeholder={gall_url}
        defaultValue={props.gallurl}
        {...register("custom.gallurl", { required: true} )}
      />
      {errors.custom && (
        <span className=" text-red-600">
          <strong>스티브 갤러리 서버홍보 게시물 주소는 필수 입력 사항입니다!</strong>
        </span>
      )}
      {/* 
      <p>마크다운을 활용하여 자신의 서버를 소개해 보세요. [WIP]</p>
      <div className="flex flex-row justify-between">
        <textarea
          className={field.McField}
          {...register("md")}
          onChange={(x) => setMd(x.target.value)}
        />
        미리보기
                <ReactMarkdown className="prose prose-p:text-black bg-white prose-hr:my-[5px] prose-hr:border-black" >
                {md}
              </ReactMarkdown> 
      </div> */}
    </>
  );
}
