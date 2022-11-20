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
            <p>열심히 고치는중</p>
            <p>모바일 버전 크룸이나 사파리 등 맨 밑부분이 잘리는 버그가 있음</p>
            <div>
                <p>↓↓ 에러나 기타 등등은 여기로 제보 ↓↓</p>
            <a href="mailto:njoyshadow@gmail.com" className="text-blue-500">njoyshadw@gmail.com</a>

            <p>서버가 업데이트방식을 바꿈 그리고 더이상 스갤 개시물을 강요 안할 예정</p>
            <p>서버 포트가있으면 </p>

            <p>css 공부좀 더 해야 할듯</p>
            </div>
            <div className="h-10 mt-4 w-40 items-center inline-block">
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
  