import styles from "./reservationEyeTestTime.module.css";
import Footer from "../../components/footer/footer";

const ReservationEyeTestTime = () => {

    return (
        <div className={styles.container}>
            <form action="/action_page.php">
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/>
                <input type="submit" value="Submit"/>
            </form>
            <Footer/>
        </div>
    );
};

export default ReservationEyeTestTime;
