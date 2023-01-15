import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import MCTextField from '../../../MCStyled/mcTextField';
import McTextInput from '../../../MCStyled/controller/mcTextInput';
import TagForm from '../../../form/tagForm';
import UserInfoForm from '../../../form/userinfoForm';
export default function BasicStep() {
    const { register } = useFormContext()
    
    return(<>
        <p>서버주소를 입력해주세요</p>
        <McTextInput name='url' placeholder='ex) mc.njoys.me'/>
        <UserInfoForm/>
        <p>아이디랑 비번은 나중에 수정하거나 삭제할때 쓰입니다.</p>
    </>)
};


