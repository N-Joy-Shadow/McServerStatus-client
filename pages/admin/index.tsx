import next, { NextPage } from "next";
import Link from "next/link";
import MCButton from "../../utils/components/MCStyled/mcButton";
import MCstyledLayout from "../../utils/layouts/mcStyleLayout";

export default function AdminPaeg() {
  return (
    <MCstyledLayout>
      <div className="text-center items-center flex flex-col space-y-4">
        <p>찾았다 미빌의 공간!</p>

        <Link href="/">
          <div className="w-40">
            <MCButton>BACK</MCButton>
          </div>
        </Link>
      </div>
    </MCstyledLayout>
  );
}
