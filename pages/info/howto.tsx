import InfoLayout from "../../utils/layouts/infoLayout";
import { HeadProps } from '../../API/HeadProps';

export default function howto() {
    const head : HeadProps = {
        title : "어떻게 씀?"
    }
    return(<InfoLayout head={head}>
        <>hi</>
    </InfoLayout>)
};
