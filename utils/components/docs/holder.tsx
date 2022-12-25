import { ReactNode } from 'react';


interface APIHolderProps {
    children : ReactNode,
    Input_URL : string
    HandleOnClick : (e : any) => void
}



export default function APIHolder({ children, Input_URL,HandleOnClick} : APIHolderProps) {
    const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL ?? "https://status.njoys.me/api/"
    const url = BASE_API + Input_URL

    return(
        <div className="rounded-xl outline outline-4 outline-green-400 w-[90vw] h-12 bg-white flex justify-start overflow-hidden overflow-x-auto">
          <div className="bg-green-400 flex justify-center px-2">
            <p className=" self-center select-none">GET</p>
          </div>
          <div className="flex flex-row self-center text-sm mx-2 flex-grow">
            <p className="text-black self-center">{url}</p>
              {children}
          </div>
          <div
            className="w-14 bg-green-400 flex justify-center cursor-pointer select-none active:bg-green-500"
            onClick={HandleOnClick}
          >
            <p className="mb-1 self-center select-none">실행</p>
          </div>
        </div>
    )
};
