import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import serverStyle from "../../styles/serverinfo/server.module.css";
import { ServerInfo } from "../../API/ServerInfo";
import { ServerInfoContext } from "../../pages";
import { motdParser } from '@sfirew/mc-motd-parser'
export interface ServerInfoLayoutProps {
  data: ServerInfo;
  icon?: string;
}

export default function ServerInfoLayout(props: ServerInfoLayoutProps) {

  let motd = props.data.motd ?? "{\"text\":\"Loading...\"}"
  let motdHtml =""
  try{
    let motdJson = JSON.parse(motd)
    motdHtml = motdParser.autoToHtml(motdJson)
  }
  catch{
    motdHtml = motdParser.autoToHtml(motd)
  }

  return (
    <div className={serverStyle.serverContainer}>
      <div style={{ display: "flex" }}>
        <img src={props.icon} width={64} height={64} />
        <div className={serverStyle?.serverInfoContainer}>
          <div style={{ display: "flex" }}>
            <p className={serverStyle.serverName}>{props?.data.hostName}</p>
            <p className={serverStyle.playerCount}>
              {props?.data.players?.playerCount} /{" "}
              {props?.data.players?.maxPlayerCount}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html : motdHtml }}></div>
        </div>
    </div>
    </div>
  );
}
