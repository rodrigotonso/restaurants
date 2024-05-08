import styles from "./style.module.css";

export default function CustomButton({ children }: { children: string }) {
    return <button className={styles.Button}>{children}</button>;
}
