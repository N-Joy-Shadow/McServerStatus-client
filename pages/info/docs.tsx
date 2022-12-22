/* eslint-disable react-hooks/rules-of-hooks */
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from "../../API/HeadProps";
import MCButton from "../../utils/components/MCStyled/mcButton";
import Link from "next/link";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ServerInfo } from "../../API/ServerInfo";
import InfoLayout from "../../utils/layouts/infoLayout";
import { ResInfo } from "../../API/ResInfo";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from 'react';
import APIResult from "../../utils/components/docs/result";
export default function index() {
  const head: HeadProps = {
    title: "API 문서",
  };
  
  const [exurl, SetExurl] = useState<string>("");
  const [result, SetResult] = useState<ResInfo<ServerInfo>>();
  const [servers, SetServers] =useState<string[]>([])

  const baseURL: string = "https://status.njoys.me/api/status/";

  const cfg = {
    type: "space",
    size: 4,
  };

  useEffect(() =>{
    axios.get("https://status.njoys.me/api/serverlist").then(x => SetServers(x.data))
  },[])


  const ExecuteGet = async (e: React.MouseEvent<HTMLInputElement>) => {
    const url = baseURL + exurl;
    await axios.get(url).then((x: AxiosResponse<ResInfo<ServerInfo>>) => {
      SetResult(x.data);
      console.log(x.data);
    });
  };
  return (
    <InfoLayout head={head}>
      <div className="m-6 flex justify-center items-center  flex-col space-y-8 text-center">
        <h6>주의! 모바일은 ㅁ?ㄹ</h6>

        <div className="rounded-xl outline outline-4 outline-green-400 w-[90vw] h-12 bg-white flex justify-start overflow-hidden z-10">
          <div className="bg-green-400 flex justify-center px-2">
            <p className=" self-center select-none">GET</p>
          </div>
          <div className="flex flex-row self-center text-sm mx-2 flex-grow">
            <p className="text-black self-center">{baseURL}</p>

            <Autocomplete
              options={servers}
              className="m-2 w-full"
              onChange={(event: any, newValue: string | null) => {
                if(newValue)SetExurl(newValue)
              }}
              renderInput={(x) => <TextField {...x} label="서버주소"/>}/>
          </div>
          <div
            className="w-14 bg-green-400 flex justify-center cursor-pointer select-none active:bg-green-500"
            onClick={ExecuteGet}
          >
            <p className="mb-1 self-center select-none">실행</p>
          </div>
        </div>
        <APIResult data={result} />
        <div className="rounded-xl outline-4 outline-orange-300 outline w-[90vw] h-full bg-white">
          <div className="bg-orange-300 text-white py-1 pb-3 text-xl">설명</div>
          <div className="text-black p-2 text-start">
            HostIP의 Original과 Decoration의 차이점 :<br/>
            Original : SRV 호스트 주소입니다.<br/>
            Decoration : 실질적으로 유저가 마인크래프트에 연결하는 호스트 주소입니다.
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}
