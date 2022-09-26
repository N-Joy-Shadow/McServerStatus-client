import MCButton from "../MCStyled/mcButton";
import { useRef } from 'react';
import { useTagStore, isExistTag, pushTags, removeTags } from '../../zustand/tagStore';

interface TagProps{
  name : string
  isSelected? : boolean
}


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


  return (<div className="w-auto flex flex-row">
    <MCButton onClick={HandleOnClick}>

      <img src="tag.png" className="w-8 h-8 m-1"></img>
      <p className="pr-1" ref={tagRef}>{props.name}</p>
    </MCButton>
    </div>);
}


