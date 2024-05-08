import Image from "next/image";
import styles from "./style.module.css";
import CustomButton from "../buttons/CustomButton";

type RestaurantCardProps = { text: string; src: string };

export default async function RestaurantCard({
    text,
    src,
}: RestaurantCardProps) {
    return (
        <div className={styles.cardContainer}>
            <Image
                className={styles.cardImage}
                alt={text}
                src={src}
                height={100}
                width={100}
            />
            <h1 className={styles.cardTitle}>{text}</h1>
            <CustomButton>Book</CustomButton>
        </div>
    );
}
