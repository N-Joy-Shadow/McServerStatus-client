import React ,{ ReactNode, useRef, forwardRef } from "react";
import "../styles/modal/modallayout.css"

export default function ModalLayout({ children }: { children: ReactNode }) {
  const titleref = useRef<HTMLParagraphElement>(null);

  //Copy Function

  return (
    <div className="absolute modal-center bg-black outline outline-8 outline-offset-0 outline-[#797878] h-auto w-[24rem] md:w-[40rem] xl:w-[60rem]">
      <div className="">{children}</div>

    </div>
  );
}
