/* eslint-disable react-hooks/rules-of-hooks */
import InfoLayout from "../../utils/layouts/infoLayout";
import { HeadProps } from '../../API/HeadProps';
import MCButton from '../../utils/components/MCStyled/mcButton';
import { useSnackbar } from "notistack";

export default function howto() {
    const { enqueueSnackbar } = useSnackbar();


    const head : HeadProps = {
        title : "어떻게 씀?"
    }

    const onClick = (e : any) =>{
        enqueueSnackbar("테스트입니다.", { variant : "Toast", title : "테스트"})

    }
    return(<InfoLayout head={head}>
        <div></div>

        <MCButton onClick={onClick}>test</MCButton>
    </InfoLayout>)
};
