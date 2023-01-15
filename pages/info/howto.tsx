import { enqueueSnackbar, useSnackbar } from "notistack";
import { IHelmet } from '../../API/IHelmet';
import React from "react";
import InfoLayout from '../../layouts/infoLayout';
import MCButton from "../../components/MCStyled/mcButton";

export default function Howto() {

    const helmet : IHelmet = {
        title : "어떻게 씀?"
    }

    const onClick = (e : any) =>{
        enqueueSnackbar("테스트입니다.", { variant : "Toast", title : "테스트"})

    }

    return(<InfoLayout helmet={helmet}>

        <MCButton onClick={onClick}>test</MCButton>
    </InfoLayout>)
};