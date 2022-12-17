import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from "../../API/HeadProps";
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import { GetStaticProps, NextPage } from "next/types";

const index: NextPage = ({}) => {
  const head: HeadProps = {
    title: "공지",
  };

  return (
    <MCstyledLayout head={head}>
      <div>
        <div className="fixed w-full flex felx justify-end">
          <div className="w-60 m-4 textcenter">
          <Link href="/docs">
            <MCButton>API 문서</MCButton>
          </Link>
          </div>
        </div>
        <div className="display items-center text-center pt-40 h-full">
          일단 대충 쓰는 공지
          <p>열심히 고치는중</p>
          <div>
            <p>↓↓ 에러나 기타 등등은 여기로 제보 ↓↓</p>
            <a href="mailto:njoyshadow@gmail.com" className="text-blue-500">
              njoyshadow@gmail.com
            </a>
            <p>이메일 주소 해결(주소를 잘못 적어둠)</p>
          </div>
          <div className="h-10 mt-4 w-40 items-center inline-block">
            <Link href="/">
              <MCButton>뒤로 가기</MCButton>
            </Link>
          </div>
        </div>
      </div>
    </MCstyledLayout>
  );
};
export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
export default index;
