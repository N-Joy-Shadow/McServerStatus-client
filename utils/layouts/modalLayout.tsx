import { ReactNode, useRef } from "react";

export default function ModalLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const titleRef = useRef<HTMLParagraphElement>();
  //Copy Function
  const handleCopy = () => {
    const rawtitle = titleRef.current?.innerText ?? "notfound";
    if (rawtitle != "notfound") navigator.clipboard.writeText(rawtitle);
  };

  return (
    <div className="absolute modal-center bg-black outline outline-8 outline-offset-0 rounded-sm outline-gray-300 h-auto">
      <div className="w-auto bg-gray-300 flex  justify-between">
        <div
          className="text-xl text-center self-center pl-2 flex justify-start cursor-pointer"
          onClick={handleCopy}
        >
          <p ref={titleRef} className="text-black">
            {title ?? "NotFound"}
          </p>
          <p className="text-black ml-4 text-lg">- Copy</p>
        </div>
        <button className="text-black px-3 py-1 text-xl text-end mb-1">
          x
        </button>
      </div>
      <div className="p-2">{children}</div>
      <style jsx>
        {`
          .modal-center {
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 50rem;
          }
        `}
      </style>
    </div>
  );
}
