import axios from "axios";
import { useEffect, useState, useContext } from "react";
import serverStyle from "../../styles/serverinfo/server.module.css";
import { ServerInfo } from "../../API/ServerInfo";
import { ServerInfoContext } from "../../pages";
import { motdParser } from "@sfirew/mc-motd-parser";
import MCServerLoading from "../MCStyled/MCServerLoading";

export interface ServerInfoLayoutProps {
  data: ServerInfo;
  icon?: string;
}

export default function ServerInfoLayout(props: ServerInfoLayoutProps) {
  let motd = props.data.motd ?? '{"text":"호스트 네임을 찾을 수 없습니다."}';
  let motdHtml = "";
  try {
    let motdJson = JSON.parse(motd);
    motdHtml = motdParser.autoToHtml(motdJson);
  } catch {
    motdHtml = motdParser.autoToHtml(motd);
  }
  let playerCount;
  if(props.data?.players?.maxPlayerCount == null || props.data.players.maxPlayerCount == 0){
    playerCount = ""
  }else{
    playerCount = `${props?.data.players?.playerCount} / ${props?.data.players?.maxPlayerCount}`
  }

  return (
    <div className={serverStyle.serverContainer}>
      <div style={{ display: "flex" }}>
        <img className={serverStyle.serverImage} src={props.icon} width={64} height={64} />
        <div className={serverStyle?.serverInfoContainer}>
          <div style={{ display: "flex" }}>
            <p className={serverStyle.serverName}>{props?.data.hostName}</p>
            <p className={serverStyle.playerCount}>
              {playerCount}
            </p>
            <MCServerLoading
            isOnline={props.data.isOnline}
            LoadingStr={props.data.motd}
            />
            
          </div>
          <div dangerouslySetInnerHTML={{ __html: motdHtml }}
          className={serverStyle.serverMotd}
          ></div>
        </div>
      </div>
    </div>
  );
}
