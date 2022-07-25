import Link from "next/link";
import Bstyles from "../styles/mc/Background.module.css";
import styles from "../styles/mc/Button.module.css";

export default function Footer() {
  return (
    <div className={Bstyles.McBackground}>
      <footer className={styles.McBtnContainer}>
        <Link href="add/server">
          <div className={styles.McButton} >
            <div className={styles.title}>서버 추가</div>
          </div>
        </Link>
      </footer>
    </div>
  );
}
