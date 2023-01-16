import {IHelmet} from "../../API/IHelmet"
import InfoLayout from '../../layouts/infoLayout';
import { useEffect, useState } from 'react';
import axios from "axios";
import { INotice } from '../../API/INotice';
import { IResInfo } from "../../API/IResInfo";
import React from "react";

const Info = () => {
  const head: IHelmet = {
    title: "공지",
  };
  const BASE_API = import.meta.env.VITE_BASE_API_URL
  const url = BASE_API + "/notice"

  const [Notices, SetNotices] = useState<IResInfo<INotice[]>>();
  useEffect(() =>{
    axios.get(url).then((x) => SetNotices(x.data))
  },[])
  return (
    <InfoLayout helmet={head}>
      <div className="p-4 space-y-4 divide-y-2">
      {Notices?.data.map((x,i) => (
        <div key={i} className="space-y-2">
          <h1 className=" text-4xl">{x.notice.title}</h1>
          <p className="text-gray-400 text-sm">{x.notice.date}</p>
          <div className="prose prose-invert" dangerouslySetInnerHTML={{__html:x.convert_content}}/>
        </div>
      ))}
      </div>
    </InfoLayout>
  );
};

export default Info;