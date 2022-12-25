import next, { NextPage } from "next";
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import McToggle from "../../utils/components/MCStyled/mcToggle";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { useForm } from 'react-hook-form';
import moment from "moment";
import axios from "axios";

export default function AdminPage() {
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL ?? "https://status.njoys.me/api/"
  const BASE_URL = BASE_API + "/notice"
  
  const { register ,handleSubmit} = useForm();
  
  const OnSubmit = (data : any) => {
    data.date = moment().format("YYYY-MM-DD")
    console.log(data)
    axios.post(BASE_URL,data).then(x =>{
      console.log(x.data)
    })
  }

  return (
    <>
      <div className="text-center items-center flex flex-col space-y-4">
        <p className="text-xl">찾았다 미빌의 공간!</p>
        <McToggle/>
        <Link href="/">
          <div className="w-40">
            <MCButton>BACK</MCButton>
          </div>
        </Link>
        <Link href="/login">
          <div className="w-40">
            <MCButton>로그인</MCButton>
          </div>
        </Link>



        <form onSubmit={handleSubmit(OnSubmit)}>
          <input className="text-black"  type="text" {...register("title")}/>
          <textarea className="text-black" {...register("content")}/>
          <input type="submit"/>
        </form>
      </div>
    </>
  );
}
