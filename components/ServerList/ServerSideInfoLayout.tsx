import { ServerInfoLayoutProps } from "./ServerInfoLayout";
import styles from "../../styles/serverinfo/sideinfo.module.css";
import MCButton from "../MCStyled/MCButton";
import { Refresh } from "@mui/icons-material";

export default function ServerSideInfoLayout(props: ServerInfoLayoutProps) {
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
          <p>Bukkit : {props.data.bukkit}</p>
          <p>Version: {props.data.version}</p>
          
        </div>
        <div className={styles.TopRightBtnContainer}>
          <div className={styles.TopRightBtn}>
            <MCButton onClick={() => {}} style={{ color :"green"}}>R</MCButton>
          </div>
          <div className={styles.TopRightBtn}>
            <MCButton onClick={() => {}} style={{color :"red"}}>X</MCButton>
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
    </div>
  );
}

//<Refresh sx={{ px : "2px" ,paddingTop : "4px"}}/> 나중으로 대체
