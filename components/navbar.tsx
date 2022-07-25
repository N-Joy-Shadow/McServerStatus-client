import { Button } from "@mui/material";
import Link from 'next/link';
import styles from '../styles/mc/Button.module.css'
import Bstyles from '../styles/mc/Background.module.css'

export default function navbar() {
    return(<div className={Bstyles.McBackground} >
        <nav className={styles.McBtnContainer} style={{float:"right"}}>
            <Link href="login">
                <div className={styles.McButton}>
                    <div className={styles.title}>Login</div>
                </div>
            </Link>
            
        </nav>
    </div>)
};
