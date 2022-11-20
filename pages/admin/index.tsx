import next, { NextPage } from "next";
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import McToggle from "../../utils/components/MCStyled/mcToggle";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

export default function AdminPaeg() {
  return (
    <MCstyledLayout>
      <div className="text-center items-center flex flex-col space-y-4">
        <p className="text-xl">찾았다 미빌의 공간!</p>
        <McToggle/>
        <Link href="/">
          <div className="w-40">
            <MCButton>BACK</MCButton>
          </div>
        </Link>
      </div>
    </MCstyledLayout>
  );
}
