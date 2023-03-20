import React from "react";
import TagForm from '../../../form/tagForm';
import McTextInputC from "../../../MCStyled/controller/mcTextInput";

export default function OptionStep() {
    


    return(<div className="space-y-3"> 
            <TagForm/>
            <p>갤러리 주소를 입력해주세요</p>
            <McTextInputC name='custom.gallurl' placeholder="https://gall.dcinside.com/mgallery/board/view/?id=steve"/>
            <p>갤러리 주소는 더이상 <strong>필수</strong>로 안넣어도 됩니다.</p>
    </div>)
};
