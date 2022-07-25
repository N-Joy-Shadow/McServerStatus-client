import axios from "axios";
import { useEffect } from "react";
import { ServerInfo } from "../API/ServerInfo";
import PlayerMinInfo from "./player/player_info";
import serverStyle from "../styles/serverinfo/server.module.css";
export interface serverData {
  ServerData: ServerInfo;
}

export default function infoServer(data: serverData) {
  //임시
  let icon =
    data.ServerData.icon == ""
      ? "https://status.shwa.space/assets/images/default.png"
      : data.ServerData.icon;
  const serverPlayerList = data.ServerData.players.playerList ?? ["헉!"];
  return (
    <div className={serverStyle.serverContainer}>
      <div style={{ display: "flex" }}>
        <img src={icon} width={64} height={64} />
        <div className={serverStyle.serverInfoContainer}>
          <div style={{ display: "flex" }}>
            <p className={serverStyle.serverName}>{data.ServerData.hostName}</p>
            <p className={serverStyle.playerCount}>
              {data.ServerData.players.playerCount} /{" "}
              {data.ServerData.players.maxPlayerCount}
            </p>
          </div>
          {data.ServerData.motdHtml.map((x, i) => {
            return <div key={i} dangerouslySetInnerHTML={{ __html: x }} />;
          })}
        </div>
      </div>

      {/* {serverPlayerList.map((x,i) =>{
        console.log(x)
        return(<PlayerMinInfo key={i * 100} name={x}/>)
      })} */}
    </div>
  );
}

{
  /* <p>버킷 : {data.ServerData.bukkit}</p>
<p>Ip : {data.ServerData.ip}</p>
<p>Version : {data.ServerData.version}</p> */
}
