/* eslint-disable @next/next/no-img-element */
import { useFormContext } from "react-hook-form";
import field from "../../../styles/mc/TextField.module.css";
import btn from "../../../styles/mc/Button.module.css";
import Tag from "../tag/tag";
import { DOMAttributes, MouseEventHandler, useContext, useState } from "react";
import { pushTags, removeTags } from "../../zustand/tagStore";
import { useTagFormStore } from "../../zustand/tagFormStore";

export default function TagForm() {
  const tags = ["장타", "단타", "야생", "모드"];
  const {TagList,SetTag} = useTagFormStore()
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleAddTag = (z:any,x:string) => {
    SetTag(pushTags(TagList,x))
  };
  const handleRemoveTag = (z:any,x:string) => {
    SetTag(removeTags(TagList,x))
  };
  return (
    <>
      <h1>자신의 서버의 태그를 선택해 주세요</h1>
      <div className={field.McField}>
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {tags.map((x, i) => (
            <div key={i} onClick={(z) => handleAddTag(z,x)} className="flex">
              <div className={btn.McButton}>
                <img src="tag.png" className="w-6 h-6 m-1" alt=""/>
                {x}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={field.McField}>
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {(TagList == null) || (TagList.length == 0) ? (
            <p className="text-center col-span-4">선택한 태그가 없습니다.</p>
          ) : (
            TagList.map((x, i) => (
              <div key={i} onClick={(z) => handleRemoveTag(z,x)}>
                <Tag name={x} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
