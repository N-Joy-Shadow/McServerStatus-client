import axios from "axios";
import { useEffect, useState, useContext } from "react";
import serverStyle from "../../../styles/serverinfo/server.module.css";
import { ServerInfo } from "../../../API/ServerInfo";
import { ServerInfoContext } from "../../../pages";
import MCServerLoading from "../MCStyled/mcServerLoading";
import MotdPaser from "../../util/MotdPaser";

export interface ServerInfoLayoutProps {
  data: ServerInfo;
  icon?: string;
}
export default function ServerInfoLayout(props: ServerInfoLayoutProps) {
  let motdHtml = MotdPaser(props.data.motd)
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
