import { Modal, Button, Typography, Box } from "@mui/material";
import { ReactNode, useState } from "react";
import { ServerInfo } from "../../../API/ServerInfo";
import ModalLayout from "../../layouts/modalLayout";
import Tag from "../tag/tag";
import ServerItem from "./info";
import ServerInfoModal from "./modal";

export interface ServerInfoItemProps {
  data: ServerInfo;
  isLoading?: boolean;
}

export default function ServerInfoItem(props: ServerInfoItemProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!props.isLoading && props.data.frenquency.isOnline === true) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="ms:px-0 md:px-[9rem] lg:px-[16rem] xl:px=[22rem] 2xl:px-[30rem]">
      <div className="p-4 hover:outline hover:outline-3 hover:outline-gray-500">
        <div onClick={handleOpen}>
          <ServerItem data={props.data} />
        </div>
        <div className="flex px-1 justify-between flex-row">
        {/* 
          <div className="gird grid-cols-4">
            {props.data.custom?.tags != undefined &&
              props.data.custom?.tags.map((x, i) => {
                return (<Tag key={i} name={x} />);
              })}
          </div>  */}
          
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="de"
      >
        <ModalLayout title={props.data.hostname}>
          <ServerInfoModal data={props.data} />
        </ModalLayout>
      </Modal>
    </div>
  );
}
