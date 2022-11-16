import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from '../../API/HeadProps';
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import { GetStaticProps, NextPage } from "next/types";

const index : NextPage = ({}) => {
    const head :HeadProps = {
        title : "공지"
    }


    return (<MCstyledLayout head={head}>
        <div className="display items-center text-center pt-40 h-full">
            일단 대충 쓰는 공지
            <p>일단 초기 버전이고 아마 오류들은 수능 이후에 고쳐질 예정</p>
            <p>모바일 버전 크룸이나 사파리 등 맨 밑부분이 잘리는 버그가 있음</p>
            <div>
                <p>↓↓ 에러나 기타 등등은 여기로 제보 ↓↓</p>
            <a href="mailto:njoyshadow@gmail.com" className="text-blue-500">njoyshadw@gmail.com</a>

            <p>특정 서버가 업데이트가 안되는 현상이 확인됨</p>
            </div>
            <div className="h-10 mt-4 w-40 items-center inline-block md">
            <Link href="/">
              <MCButton>Back</MCButton>
            </Link>
          </div>
            
        </div>
    </MCstyledLayout>)

};
export const getstatiacprops: GetStaticProps = (context) => {
    return {
      props: {},
    };
  };
  export default index;
  