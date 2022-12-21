import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from "../../API/HeadProps";
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import { GetStaticProps, NextPage } from "next/types";
import InfoLayout from '../../utils/layouts/infoLayout';
import { MDXProvider } from "@mdx-js/react";
import MDX from "../../md/info/2022-12-21.mdx"

const index: NextPage = ({}) => {
  const head: HeadProps = {
    title: "공지",
  };

  return (
    <InfoLayout head={head}>
      <MDXProvider>
        # hi
      </MDXProvider>
    </InfoLayout>
  );
};
export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
export default index;
