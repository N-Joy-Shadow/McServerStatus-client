import React ,{ ReactNode, useRef, forwardRef } from "react";
import "../styles/modal/modallayout.css"

export default function ModalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute modal-center bg-black outline outline-8 outline-offset-0 outline-[#797878]
     h-auto w-[340px] md:w-[600px] xl:w-[750px]">
      <>{children}</>

    </div>
  );
}
