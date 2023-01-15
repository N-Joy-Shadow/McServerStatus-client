import { enqueueSnackbar, useSnackbar } from "notistack";
import { IHelmet } from '../../API/IHelmet';
import React from "react";
import InfoLayout from '../../layouts/infoLayout';
import MCButton from "../../components/MCStyled/mcButton";

export default function Howto() {

    const helmet : IHelmet = {
        title : "어떻게 씀?"
    }


    return(<InfoLayout helmet={helmet}>
        <>준비중..</>
    </InfoLayout>)
};