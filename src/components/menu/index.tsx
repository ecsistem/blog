import Link from "next/link";
import styles from "./styles.module.css";

const Menu = () => {
  return (
    <header className={styles.containerMenu}>
      <div className="containerMDX">
        <div className={styles.containerNav}>
          <div className={styles.profileMenu}>
            <img src="/logo-edson-costa.svg" alt=""/>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/social">Social</Link>
              </li>
              <li>
                <Link href="/setup">Setup</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
