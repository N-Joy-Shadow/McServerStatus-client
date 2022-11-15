import { NextPage } from 'next';
import MCstyledLayout from '../../utils/layouts/mcStyleLayout';
import { HeadProps } from '../../API/HeadProps';
const index : NextPage = ({}) => {
    const head : HeadProps = {
        title : "document"
    }



    return(<MCstyledLayout head={head}>
        <div>hi</div>
    </MCstyledLayout>)
}





export default index