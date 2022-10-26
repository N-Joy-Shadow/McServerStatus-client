import { ReactNode, useRef, forwardRef } from 'react';
import Mcbg from "../../styles/mc/Background.module.css"
import Mcbtn from "../../styles/mc/Button.module.css"


export default function ModalLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const titleref = useRef<HTMLParagraphElement>(null);
  //Copy Function
  const handleCopy = () => {
    const rawtitle = titleref.current?.innerText ?? "notfound";
    if (rawtitle != "notfound") navigator.clipboard.writeText(rawtitle);
  };

  return (
    <div className="absolute modal-center bg-black outline outline-8 outline-offset-0 outline-[#797878] h-auto w-[24rem] md:w-[40rem] xl:w-[60rem]">
      <div className={Mcbg.Mcbg_l}>


      <div className="w-auto flex  justify-between">
        {/* 주소 복사 */}
        <div
          className="text-xl text-center self-center p-2 flex justify-start cursor-pointer my-2 pl-4"
          onClick={handleCopy}
        >
          <p ref={titleref} className=" text-white">
            {title ?? "NotFound"}
          </p>
          <p className="text-white ml-4 text-lg">- Copy</p>
        </div>
        <div className='flex flex-row space-x-2'>
        {/* 버튼들 */}
        <div>
          
        </div>

        </div>
      </div>
      </div>
      <div className="">{children}</div>
      <style jsx>
        {`
          .modal-center {
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);

          }
        `}
      </style>
    </div>
  );
}
