import { Button } from "@mui/material";
import Link from 'next/link';

export default function navbar() {
    return(<div>
        <nav>
            <Link href="login">
                <Button>
                    <p>Login</p>
                </Button>
            </Link>
            
        </nav>
    </div>)
};
