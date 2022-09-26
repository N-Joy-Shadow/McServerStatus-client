import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { InsertServer } from "../../utils/components/fetch/insertServer";
import MCButton from "../../utils/components/MCStyled/mcButton";
import MCTextField from "../../utils/components/MCStyled/mcTextField";
import AddServer from "../../utils/components/pushServer/addServer";
import MarkdownRender from "../../utils/components/pushServer/markdown";
import TagSelect from "../../utils/components/pushServer/tagSelect";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

const server: NextPage = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [server, Setserver] = useState<string>("");

  function HandleOnChange(x: any) {
    Setserver(x.value);
  }

  return (
    <MCstyledLayout>
      <div className="flex flex-col items-center align-middle top-80 relative">
        <div className="w-[28rem] ">
          <p className="text-center">ADD SERVER</p>
          <div className="my-4">
            <MCTextField onChange={(x) => HandleOnChange(x.target)} />
          </div>
          <div>
          
            <TagSelect />
          </div>
          <div className="my-4">
            <MCButton
              onClick={async () =>
                await InsertServer(server).then((x) => alert("Done!"))
              }
            >
              Add Server
            </MCButton>
          </div>

          <div>
            <Link href="/">
              <MCButton>Back</MCButton>
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
export default server;
