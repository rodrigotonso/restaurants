import RestaurantCard from "@/components/cards/RestaurantCard";
import styles from "./style.module.css";
import CustomButton from "@/components/buttons/CustomButton";

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
                    <CustomButton>Do a reservation</CustomButton>
                </div>
            </div>
            <div className={styles.restaurantsSection}>
                <RestaurantCard
                    text="The Italian Food"
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <RestaurantCard
                    text="The Italian Food"
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <RestaurantCard
                    text="The Italian Food"
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <RestaurantCard
                    text="The Italian Food"
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            </div>
        </div>
    );
}
