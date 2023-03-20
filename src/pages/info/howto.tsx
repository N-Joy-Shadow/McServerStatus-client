import { enqueueSnackbar, useSnackbar } from "notistack";
import { IHelmet } from '../../API/IHelmet';
import React from "react";
import InfoLayout from '../../layouts/infoLayout';
import { useMsal } from "@azure/msal-react";
import { McButton } from "../../components/MCStyled/mcStyle";

export default function Howto() {
    const { instance, accounts, inProgress } = useMsal();
    
    const helmet : IHelmet = {
        title : "어떻게 씀?"
    }


    return(<InfoLayout helmet={helmet}>
        <McButton onClick={() => { }}>로그인</McButton>
    </InfoLayout>)
};