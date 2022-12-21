import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from "../../API/HeadProps";
import MCButton from "../../utils/components/MCStyled/mcButton";
import Link from "next/link";
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ServerInfo } from '../../API/ServerInfo';
import InfoLayout from '../../utils/layouts/infoLayout';

export default function index() {
  const head: HeadProps = {
    title: "API 문서",
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [exurl,SetExurl] = useState<string>("")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [result,SetResult] = useState<ServerInfo>() 
  const baseURL : string = "https://status.njoys.me/api/status/"

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    SetExurl(e.target.value)
  }
  const ExecuteGet = async (e : React.MouseEvent<HTMLInputElement>)  =>{
    const url = baseURL + exurl

    await axios.get(url).then((x : AxiosResponse<ServerInfo>) =>{
        SetResult(x.data)
    })
    
  }
  return (
    <InfoLayout head={head}>

      <div className="m-6 flex justify-center items-center  flex-col space-y-4 text-center">
        <h6>주의! 모바일은 ㅁ?ㄹ</h6>
        <div className="rounded-xl outline outline-4 outline-green-400 w-[90vw] h-12 bg-white flex justify-start overflow-hidden">
          <div className="bg-green-400 flex justify-center px-2">
            <p className=" self-center select-none">GET</p>
          </div>
          <div className="flex flex-row self-center text-sm mx-2 flex-grow">
            <p className="text-black self-center">{baseURL}</p>
            <input type="text" className="p-1 ml-1 w-full outline outline-black rounded-sm outline-2 text-black"
            placeholder="등록된 서버 주소" onChange={handleOnChange}/>
          </div>
          <div className="w-14 bg-green-400 flex justify-center cursor-pointer select-none active:bg-green-500"
          onClick={ExecuteGet}>
            <p className="mb-1 self-center select-none">실행</p>
          </div>
        </div>
        <div>{result?.lazy.icon}</div>
      </div>
    </InfoLayout>
  );
}
