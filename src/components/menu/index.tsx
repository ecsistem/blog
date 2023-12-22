import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const Menu = () => {
  return (
    <header className={styles.containerMenu}>
      <div className="containerMDX">
        <div className={styles.containerNav}>
          <div className={styles.profileMenu}>            
          <Link href="/"><Image src="/logo-edson-costa.svg" alt="Edson Costa" width={150} height={30} /></Link>
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
                <Link href="/links">Links</Link>
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
