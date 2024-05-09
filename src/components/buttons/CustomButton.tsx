"use client";
import { ReactNode } from "react";
import styles from "./style.module.css";

export default function CustomButton({
    children,
}: {
    children: ReactNode | string;
}) {
    function scrollToTop() {
        const isBrowser = () => typeof document !== "undefined";
        if (!isBrowser()) return;
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth",
        });
    }
    return (
        <button className={styles.Button} onClick={scrollToTop}>
            {children}
        </button>
    );
}
