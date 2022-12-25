/* eslint-disable react-hooks/rules-of-hooks */
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";
import { HeadProps } from "../../API/HeadProps";
import InfoLayout from "../../utils/layouts/infoLayout";
import APIStatus from "../../utils/components/docs/status/main";
import APIServerList from "../../utils/components/docs/serverlist/main";
export default function index() {
  const head: HeadProps = {
    title: "API 문서",
  };

  const cfg = {
    type: "space",
    size: 4,
  };



  return (
    <InfoLayout head={head}>
      <div className="m-6 flex justify-center items-center  flex-col space-y-8 text-center">
        <h6>주의! 모바일은 ㅁ?ㄹ</h6>

        {/* Get Server Status */}
        <APIStatus/>
        {/* Get ServerList */}
        <APIServerList/>
      </div>
    </InfoLayout>
  );
}
