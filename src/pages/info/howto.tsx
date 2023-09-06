import { enqueueSnackbar, useSnackbar } from "notistack";
import { IHelmet } from '../../API/IHelmet';
import React, { useEffect, useState } from "react";
import InfoLayout from '../../layouts/infoLayout';
import { useMsal } from "@azure/msal-react";
import { McButton } from "../../components/MCStyled/mcStyle";
import { HttpTransportType, HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";
import axios from "axios";

export default function Howto() {
    const { instance, accounts, inProgress } = useMsal();
    const [connection, setConnection] = useState<HubConnection>();
    const [test ,settest ] = useState<any>();
    const helmet : IHelmet = {
        title : "어떻게 씀?"
    }

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
          //Fix Url Later
          .withUrl(import.meta.env.VITE_BASE_HUB_URL, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
          })
          .withAutomaticReconnect()
          .build();

        setConnection(newConnection);
      }, []);
      useEffect(() => {
        console.log("connection 감지")
        console.log(connection?.state)
        if (connection?.state == HubConnectionState.Connected) {
          console.log("connected")
          connection.start().then(() => {    
            connection.on("update", (data : any) => {
              settest(data);
            });
          });
        } else {
        }
      }, [connection]);


    return(<InfoLayout helmet={helmet}>
        <p style={{ color : "black"}}>{test}</p>
    </InfoLayout>)
};