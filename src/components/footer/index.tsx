import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div className="containerMDX">
          <section>
            <p>
              © 2023
              <Link href="https://edsoncosta.online" target="_blank">
                edsoncosta.online
              </Link>
            </p>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
