import DefualtLayout from '../../layouts/defualtLayout';
import { IHelmet } from '../../API/IHelmet';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import moment from 'moment';
export default function Login() {
    const BASE_URL = import.meta.env.VITE_BASE_API_URL
    const helmet : IHelmet = {
        title : "로그인"
    }
    const { register ,handleSubmit} = useForm();
    
    const OnSubmit = (data : any) => {
      data.date = moment().format("YYYY-MM-DD")
      console.log(data)
      axios.post(BASE_URL + "/notice" ,data).then(x =>{
        console.log(x.data)
      })
    }
    return(<DefualtLayout title='로그인' helmet={helmet}>
        <>사실 아직 구현이 안됨</>
        <form onSubmit={handleSubmit(OnSubmit)} className="w-96rem">
          <input className="text-black"  type="text" {...register("title")}/>
          <textarea className="text-black" {...register("content")}/>
          <input type="submit"/>
        </form>

    </DefualtLayout>)
};
