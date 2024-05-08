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

                        <button className={styles.ctaBttn}>Do a reservation</button>

                </div>
            </div>
        </div>
    );
}
