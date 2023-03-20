import React from "react"
import { IHelmet } from "../../API/IHelmet";
import DefualtLayout from '../../layouts/defualtLayout';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import UserInfoForm from "../../components/form/userinfoForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { McButton } from "../../components/MCStyled/mcStyle";
 
interface IEditProps {

}
 
const DevEdit = (props : IEditProps) => {
    const { name } = useParams()

    const schema = z.object({
        hostname : z.string().default(name ?? ""),
        userinfo : z.object({
            id : z.string().min(1),
            pw : z.string().min(1),
        }),
    
    })
    const Form = useForm({ resolver : zodResolver(schema)})


const helmet : IHelmet = {
    title : "서버수정"
}

const OnSubmit = (data :any) => {
    data.hostname = name
    console.log(data)
}

return (<DefualtLayout title="서버수정" helmet={helmet} >
        <p>서버주소는 변경 할 수 수가 없습니다.</p>
        <p>{name}</p>
        <FormProvider {...Form}>
            <form onSubmit={Form.handleSubmit(OnSubmit)}>
                <UserInfoForm/>
            </form>
            <McButton type="submit"/>
        </FormProvider>    
    </DefualtLayout >)
}
 
export default DevEdit