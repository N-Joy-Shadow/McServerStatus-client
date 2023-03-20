import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import UserInfoForm from '../../../form/userinfoForm';

import "../../../../styles/firefox/input.css"
import McTextInputC from '../../../MCStyled/controller/mcTextInput';
export default function BasicStep() {
    const { register, formState : { errors} } = useFormContext()
    
    return(<>
        <p>서버주소를 입력해주세요</p>
        <McTextInputC name='url' placeholder='ex) mc.njoys.me' required={true}/>
        {errors.url && (
            <span className=" text-red-600">
          <strong>서버주소는 필수 입력 사항입니다!</strong>
        </span>
            )}
        <UserInfoForm/>
        <p>아이디랑 비번은 나중에 수정하거나 삭제할때 쓰입니다.</p>
    </>)
};


