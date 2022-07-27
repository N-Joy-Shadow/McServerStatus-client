import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import serverStyle from "../../styles/serverinfo/server.module.css";
import { ServerInfo } from "../../API/ServerInfo";
import { ServerInfoContext } from "../../pages";

export interface ServerInfoLayoutProps {
  data: ServerInfo;
  icon?: string;
}

export default function ServerInfoLayout(props: ServerInfoLayoutProps) {

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
          {props?.data.motdHtml?.map((x, i) => {
            if (x.startsWith("A Minecraft Server")) {
              return <p style={{ color: "white" }}>A Minecraft Server</p>;
            }
            return <div key={i} dangerouslySetInnerHTML={{ __html: x }} />;
          })}
        </div>
      </div>
    </div>
  );
}
