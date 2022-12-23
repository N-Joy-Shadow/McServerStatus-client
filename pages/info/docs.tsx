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
import APIHolder from "../../utils/components/docs/holder";
import APIStatus from "../../utils/components/docs/status/main";
import APIServerList from "../../utils/components/docs/serverlist/main";
export default function index() {
  const head: HeadProps = {
    title: "API 문서",
  };

  const cfg = {
    type: "space",
    size: 4,
  };



  return (
    <InfoLayout head={head}>
      <div className="m-6 flex justify-center items-center  flex-col space-y-8 text-center">
        <h6>주의! 모바일은 ㅁ?ㄹ</h6>

        {/* Get Server Status */}
        <APIStatus/>
        {/* Get ServerList */}
        <APIServerList/>
      </div>
    </InfoLayout>
  );
}
