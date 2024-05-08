import styles from "./style.module.css";

export default async function CustomButton({ children }: { children: string }) {
    return <button className={styles.Button}>{children}</button>;
}
