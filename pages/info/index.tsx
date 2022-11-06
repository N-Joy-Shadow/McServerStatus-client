import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from '../../API/HeadProps';
import { getstatiacprops } from '../server/add';
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";

export default function index() {
    const head :HeadProps = {
        title : "공지"
    }


    return (<MCstyledLayout head={head}>
        <div className="display items-center text-center mt-40 ">
            일단 대충 쓰는 공지
            <p>일단 초기 버전이고 아마 오류들은 수능 이후에 고쳐질 예정</p>
            <p>모바일 버전 스크롤에 문제가 있음 디자인쪽이라 이것도 수능이후에 고칠거임</p>
            <div>
                <p>↓↓ 에러나 기타 등등은 여기로 제보 ↓↓</p>
            <a href="mailto:njoyshadow@gmail.com" className="text-blue-500">njoyshadw@gmail.com</a>
            </div>
            <div className="h-10 mt-4 w-40 items-center inline-block">
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
            
        </div>
    </MCstyledLayout>)
};
