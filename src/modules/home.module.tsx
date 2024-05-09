import CustomButton from "@/components/buttons/CustomButton";
import InfiniteScroll from "@/components/InfinitScroll/InfinitScroll";
import styles from "./style.module.css";

export default async function HomeModule() {
    return (
        <div>
            <div className={styles.heroSecction}>
                <video autoPlay muted loop className={styles.videoBG}>
                    <source
                        src="https://videos.pexels.com/video-files/2894881/2894881-uhd_3840_2160_24fps.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className={styles.heroText}>
                    <div className={styles.heroSlogan}>
                        Only the best food to the best diner
                    </div>
                    <div className={styles.heroTitle}>Restaurant APP</div>
                </div>
            </div>
            <div className={styles.CustomButton}>
            <CustomButton>Do a reservation</CustomButton>
            </div>
            <div id="restaurantsSection" className={styles.restaurantsSection}>
                <InfiniteScroll />
            </div>
        </div>
    );
}
