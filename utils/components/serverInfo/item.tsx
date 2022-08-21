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
    if (!props.isLoading || props.data.isOnline === true) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="ms:px-0 md:px-32 2xl:px-80 ">
      <div className="p-4 hover:outline hover:outline-3 hover:outline-gray-500">
        <div onClick={handleOpen}>
          <ServerItem data={props.data} icon={props.icon} />
        </div>
        <div className="mt-4">hi</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="de"
      >
        <ModalLayout title={props.data.hostName}>
          <ServerInfoModal data={props.data} icon={props.icon} />
        </ModalLayout>
      </Modal>
    </div>
  );
}
