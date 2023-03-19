import { enqueueSnackbar, useSnackbar } from "notistack";
import { IHelmet } from '../../API/IHelmet';
import React from "react";
import InfoLayout from '../../layouts/infoLayout';
import MCButton from "../../components/MCStyled/mcButton";
import { useMsal } from "@azure/msal-react";

export default function Howto() {
    const { instance, accounts, inProgress } = useMsal();
    
    const helmet : IHelmet = {
        title : "어떻게 씀?"
    }


    return(<InfoLayout helmet={helmet}>
        <MCButton onClick={() => { }}>로그인</MCButton>
    </InfoLayout>)
};