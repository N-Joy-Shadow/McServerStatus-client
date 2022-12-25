/* eslint-disable react-hooks/rules-of-hooks */
import { HeadProps } from "../../API/HeadProps";
import { GetStaticProps, NextPage } from "next/types";
import InfoLayout from '../../utils/layouts/infoLayout';
import { useEffect, useState } from 'react';
import axios from "axios";
import { INotice } from '../../API/INotice';
import { ResInfo } from "../../API/ResInfo";

const index: NextPage = ({}) => {
  const head: HeadProps = {
    title: "공지",
  };
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL ?? "https://status.njoys.me/api/"
  const url = BASE_API + "/notice"


  const [Notices, SetNotices] = useState<ResInfo<INotice[]>>();

  useEffect(() =>{
    axios.get(url).then((x) => SetNotices(x.data))
  },[])
  return (
    <InfoLayout head={head}>
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
/* export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
}; */
export default index;
