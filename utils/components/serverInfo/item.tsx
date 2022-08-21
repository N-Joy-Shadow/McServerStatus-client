import { Modal, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { ServerInfo } from "../../../API/ServerInfo";
import ModalLayout from "../../layouts/modalLayout";
import ServerItem from "./info";
import ServerInfoModal from "./modal";

export interface ServerInfoItemProps {
  data: ServerInfo;
  icon?: string;
  isLoading?: boolean;
}

export default function ServerInfoItem(props: ServerInfoItemProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if(!props.isLoading || props.data.motd === "호스트 네임을 찾을 수 없습니다.") setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <ServerItem data={props.data} icon={props.icon} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="de"
      >
        <ModalLayout title={props.data.hostName}>
          <ServerInfoModal data={props.data} icon={props.icon}/>
        </ModalLayout>
      </Modal>
    </div>
  );
}
