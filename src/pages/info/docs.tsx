import { IHelmet } from '../../API/IHelmet';
import InfoLayout from '../../layouts/infoLayout';
import APIServerList from '../../components/docs/serverlist/main';
import APIStatus from '../../components/docs/status/main';

export default function Docs() {
  const helmet: IHelmet = {
    title: "API 문서",
  };

  const cfg = {
    type: "space",
    size: 4,
  };

  return (
    <InfoLayout helmet={helmet}>
      <div className="m-auto my-6 flex justify-center items-center  flex-col space-y-8 text-center max-w-[1000px] self-center">
        <h6>주의! 모바일은 ㅁ?ㄹ</h6>

        {/* Get Server Status */}
         <APIStatus/>
        {/* Get ServerList */}
         <APIServerList/>
      </div>
    </InfoLayout>
  );
}