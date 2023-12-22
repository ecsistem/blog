import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

type BackButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties | string;
};

export function BackButton({ children, href, className, style }: BackButtonProps) {
    const linkStyle = typeof style === 'string' ? {} : style; // Convert string style to an empty object
    return (
        <Link href={href} className={`${styles.backButton} ${className}`} style={linkStyle}>
            {children}
        </Link>
    );
}
