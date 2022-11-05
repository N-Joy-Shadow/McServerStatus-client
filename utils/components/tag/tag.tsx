import MCButton from "../MCStyled/mcButton";
import { useRef } from 'react';
import { useTagStore, isExistTag, pushTags, removeTags } from '../../zustand/tagStore';

interface TagProps{
  name : string
  isSelected? : boolean
}

export const TAG_LIST = ["장타", "단타", "야생", "모드", "건축", "오피섭","테스트"]


export default function Tag(props : TagProps) {
  const isSelected = props.isSelected
  const tagRef = useRef<HTMLParagraphElement>(null)
  const {TagList,SetTag} = useTagStore()

  const HandleOnClick =() => {
    if(isSelected == undefined) return
    const TagName = tagRef.current?.innerText
    if(TagName){
      if(!isSelected){
        SetTag(pushTags(TagList,TagName))
      }
      else{
        SetTag(removeTags(TagList,TagName))
      }

    }
  }


  return (<div className="w-auto flex flex-row h-[40px]">
    <MCButton onClick={HandleOnClick}>

      <img src="/tag.png" className="w-6 h-6 m-1"></img>
      <p className="pr-1" ref={tagRef}>{props.name}</p>
    </MCButton>
    </div>);
}


