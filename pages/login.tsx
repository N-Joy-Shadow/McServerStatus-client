import { Button } from "@mui/material";
import Link from "next/link";

export default function login() {
    return(<div>
        <p>회원가입 따윈 없다.</p>
        <p>only Admin</p>
        <Button>
            Google로 로그인
        </Button>
        <Link href="/">
            <Button>꺼져</Button>
        </Link>
    </div>)
};
