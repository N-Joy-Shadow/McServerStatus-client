/* eslint-disable @next/next/no-img-element */
import { useFormContext } from "react-hook-form";
import field from "../../styles/mc/TextField.module.css";
import Tag, { TAG_LIST } from "../tag/tag";
import { DOMAttributes, MouseEventHandler, useContext, useState } from "react";
import { pushTags, removeTags } from "../../zustand/tagStore";
import { useTagFormStore } from "../../zustand/tagFormStore";
import { McBlackContainer, McButton } from "../MCStyled/mcStyle";

export default function TagForm() {
  const {Tags,SetTags} = useTagFormStore()
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleAddTag = (x:string) => {
    if(Tags.length == 4){
      return
    }
    SetTags(pushTags(Tags,x))
  };
  const handleRemoveTag = (x:string) => {
    SetTags(removeTags(Tags,x))
  };
  return (
    <>
      <h1>자신의 서버의 태그를 선택해 주세요</h1>
      <McBlackContainer>
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {TAG_LIST.map((x, i) => (
            <McButton key={i} onClick={(z) => handleAddTag(x)}>
              <div className="flex items-center px-1">
                <img src="/tag.png" className="w-6 h-6 m-1" alt=""/>
                {x}
              </div>
            </McButton>
          ))}
        </div>
      </McBlackContainer>
      <McBlackContainer>
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {(Tags == null) || (Tags.length == 0) ? (
            <p className="text-center col-span-4">선택한 태그가 없습니다.(최대 4가지 선택 가능)</p>
          ) : (
            Tags.map((x, i) => (
              <div key={i} onClick={(z) => handleRemoveTag(x)}>
                <Tag name={x} />
              </div>
            ))
          )}
        </div>
      </McBlackContainer>
    </>
  );
}
