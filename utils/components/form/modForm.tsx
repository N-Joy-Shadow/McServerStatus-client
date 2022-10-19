import { useFormContext } from "react-hook-form";
import field from "../../../styles/mc/TextField.module.css";
import btn from "../../../styles/mc/Button.module.css";
import { useState } from "react";

export default function ModForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const FILE_TYPE = [
    {
      type: "default",
      name: "None Mod",
    },
    {
      type: "instance",
      name: "CurseForge Instanec",
    },
    {
      type: "zip",
      name: "Zip File",
    },
  ];
  

  const [FileText, SetFileText] = useState<string>("파일을 선택해 주세요.");
  //추후 모드관련 옵션
  const [isMod ,SetIsMod] = useState<boolean>(false)

  const handleFileInputText = (e: any) => {
    SetFileText(e.target.value);
  };

  return (
    <>
      <h2>서버 유형을 선택해주세요! [WIP]</h2>
      {/* 색깔 바꾸기 */}
      <div className="flex flex-row space-x-4 outline outline-2 bg-black outline-gray-500 p-1">
        {FILE_TYPE.map((x, i) => (
          <div key={i} className="relative space-x-3 block w-full text-center">
            <input
              type="radio"
              value={x.type}
              {...register("FileType", { required: true })}
              className="cursor-pointer"
              id={`type_file_${i}`}
              /* disabled */
            />
            <label htmlFor={`type_file_${i}`} className="cursor-pointer">
              {x.name}
            </label>
          </div>
        ))}
      </div>
      {errors.FileType && (
        <h2 className="text-red-600">
          <strong>모드 서버가 아니면 None을 선택해 주세요</strong>
        </h2>
      )}
      {/* 파일 선택*/}
      {isMod && (
        
        <div className="flex flex-row space-x-1">
        <div className="w-40">
          <label htmlFor="zip_file" className={`${btn.McButton}`}>
            파일 선택
          </label>
        </div>
        <span className="grow items-center m-auto select-all">
          <p className={field.McField}>{FileText}</p>
        </span>
        <input
          type="file"
          id="zip_file"
          accept=".zip"
          className="dump-input"
          {...register("ZipFile", {
            onChange: handleFileInputText,
          })}
        />
      </div>
      )}



      
      <style jsx>
        {`
          .dump-input {
            display: none;
          }
        `}
      </style>
    </>
  );
}
