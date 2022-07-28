import { ServerInfoLayoutProps } from "./ServerInfoLayout";
import styles from "../../styles/serverinfo/sideinfo.module.css";
import MCButton from "../MCStyled/MCButton";
import { Refresh } from "@mui/icons-material";
import { useContext } from 'react';
import { ServerInfoContext } from '../../pages/index';
import { ServerInfo } from '../../API/ServerInfo';

export default function ServerSideInfoLayout(props: ServerInfoLayoutProps) {
  const { data, setData} = useContext(ServerInfoContext)
  let dumpData : ServerInfo = {
    hostName :"",
    isOnline : false,
    players : {
      playerCount : 0,
      playerList : [''],
      maxPlayerCount :0,
    },
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={props.data.icon}
          width={128}
          height={128}
          style={{ flexGrow: 0 }}
        />
        <div style={{ flexGrow: "1" }}>
          <p>서버 주소 : {props.data.hostName}</p>
          <p>IP 주소 : {props.data.ip}</p>
          <p>Port : {props.data.port}</p>
          <p>Bukkit : {props.data.bukkit == "" ? "Unkmown" : props.data.bukkit}</p>
          <p>Version: {props.data.version}</p>
        </div>
        <div className={styles.TopRightBtnContainer}>
          <div className={styles.TopRightBtn}>
            <MCButton onClick={() => {
            }} style={{ color: "green" }}>
              R
            </MCButton>
          </div>
          <div className={styles.TopRightBtn}>
            <MCButton onClick={() => {setData(dumpData)}} style={{ color: "red" }}>
              X
            </MCButton>
          </div>
        </div>
      </div>
      <p>Player List</p>
      <div>
        {props.data.players.playerList?.map((x, i) => {
          if (x == " " || x == "") return <p>何もなかった</p>;
          return (
            <p key={i} className={styles.playerName} onClick={() => {}}>
              {x}
            </p>
          );
        })}
      </div>
      <div>
        {props.data.modList != null && (
          <div>
            <p>Mod List :</p>
            <div style={{ height: "50vh", overflowY: "auto" }}>
              {props?.data?.modList?.map((x, i) => {
                return <div key={i * 100}><p>{x}</p></div>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//<Refresh sx={{ px : "2px" ,paddingTop : "4px"}}/> 나중으로 대체
