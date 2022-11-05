import Link from "next/link";
import { ReactNode, useRef, forwardRef } from "react";
import Mcbg from "../../styles/mc/Background.module.css";
import Mcbtn from "../../styles/mc/Button.module.css";
import MCButton from "../components/MCStyled/mcButton";

export default function ModalLayout({ children }: { children: ReactNode }) {
  const titleref = useRef<HTMLParagraphElement>(null);

  //Copy Function

  return (
    <div className="absolute modal-center bg-black outline outline-8 outline-offset-0 outline-[#797878] h-auto w-[24rem] md:w-[40rem] xl:w-[60rem]">
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
