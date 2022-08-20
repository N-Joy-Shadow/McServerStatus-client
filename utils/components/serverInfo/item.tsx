import { Modal, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { ServerInfo } from "../../../API/ServerInfo";
import ModalLayout from "../../layouts/modalLayout";
import ServerItem from "./info";

export interface ServerInfoItemProps {
  data : ServerInfo,
  icon? : string
}

export default function ServerInfoItem(props : ServerInfoItemProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <ServerItem data={props.data} icon={props.icon}/>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="de"
      >
        <ModalLayout>
            <p>hi</p>
        </ModalLayout>
      </Modal>
    </div>
  );
}
