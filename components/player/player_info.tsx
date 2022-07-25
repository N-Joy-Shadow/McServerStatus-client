import { useEffect, useState } from "react";
import axios from "axios";
import { PlayerInfo } from "../../API/PlayerInfo";
import { Modal, Typography, Box } from "@mui/material";
import MorePlayerInfo from "./more_player_info";
interface playername {
  name: string;
}

export default function PlayerMinInfo(data: playername) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [playerData, SetplayerData] = useState<PlayerInfo>();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    axios
      .post("https://localhost:7238/api/playerinfo", { name: data.name })
      .then((x) => {
        let data: PlayerInfo = x.data;
        SetplayerData(data);
      });
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}>
        <Box sx={style}>
          <MorePlayerInfo data={playerData}/>
        </Box>
      </Modal>

      <div
        onClick={() => {
          handleOpen();
        }}
        style={{ border : "",background : "green"}}
      >
        <img src={playerData?.head} height="64px" width="64px"></img>
        <p>{playerData?.name}</p>
      </div>
    </div>
  );
}
