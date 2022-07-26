import axios from "axios";
import { useEffect, useState } from "react";
import { ServerInfo } from "../API/ServerInfo";
import PlayerMinInfo from "./player/player_info";
import serverStyle from "../styles/serverinfo/server.module.css";
import ServerInfoLayout from "./ServerList/ServerInfoLayout";
export interface serverip {
  serverip: string;
}

export default function infoServer(data: serverip) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [serverData, SetserverData] = useState<ServerInfo>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload, Setreload] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .post("https://localhost:7238/api/db", { Ip: data.serverip })
      .then((x) => {
        SetserverData(x.data[0]);
      });
  }, []);
  //임시
  let icon = serverData?.icon ?? "https://status.shwa.space/assets/images/default.png";
  if (icon == "" || icon == null) {
    icon = "https://status.shwa.space/assets/images/default.png";
  }
  let dumpdata : ServerInfo= {
    isOnline :false,
    hostName : data.serverip,
    motdHtml : ["<p style={{ color : 'white'}}>Loading...</p>"],
    players :{
      playerCount : 0,
      maxPlayerCount : 0,
    }
    
  }

  if (serverData == null)
    return (
      <ServerInfoLayout data={dumpdata} icon={icon}/>
      
    );

  return (
    <ServerInfoLayout data={serverData} icon={icon}/>
      

  );
}

{
  /* <p>버킷 : {serverData.bukkit}</p>
<p>Ip : {serverData.ip}</p>
<p>Version : {serverData.version}</p> */
}
{/* {serverPlayerList.map((x,i) =>{
        console.log(x)
        return(<PlayerMinInfo key={i * 100} name={x}/>)
      })} */}