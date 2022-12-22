import { ResInfo } from "../../../API/ResInfo";

interface APIResultProps {
  data: ResInfo<any> | undefined;
}

export default function APIResult(props: APIResultProps) {
  if (props.data) {
    return (
      <div className="w-[90vw] bg-white p-2 rounded-xl outline-4 outline-green-400 outline overflow-x-auto">
        <pre id="json" className="text-black text-start">
          {JSON.stringify(props.data, undefined, 4)}
        </pre>
      </div>
    );
  }
  else{
    return(<></>)
  }
}

function APISuccess(success: boolean | undefined) {}
