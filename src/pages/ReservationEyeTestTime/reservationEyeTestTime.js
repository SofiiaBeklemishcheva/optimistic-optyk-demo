import styles from "./reservationEyeTestTime.module.css";
import Footer from "../../components/footer/footer";

const ReservationEyeTestTime = () => {


    return (
        <div className={styles.container}>
            <form action="/action_page.php">
            <InputFormComponent
                label = {clientName}
                labelText = {"Wpisz imię:"}
                inputType = {text}
                id = {clientName}
                name = {clientName}
                eventHandler = {setClientName}
            />
            <InputFormComponent
                label = {clientSurname}
                labelText = {"Wpisz nazwisko:"}
                inputType = {text}
                id = {clientSurname}
                name = {clientSurname}
                eventHandler = {setClientSurname}
            />
            <InputFormComponent
                label = {phoneNumber}
                labelText = {"Wpisz numer telefonu:"}
                inputType = {text}
                id = {phoneNumber}
                name = {phoneNumber}
                eventHandler = {setPhoneNumber}
            />
            <InputFormComponent
                label = {mail}
                labelText = {"Wpisz numer telefonu:"}
                inputType = {text}
                id = {mail}
                name = {mail}
                eventHandler = {setMail}
            />
            <InputFormComponent
                label = {age}
                labelText = {"Wpisz mail:"}
                inputType = {text}
                id = {age}
                name = {age}
                eventHandler = {setAge}
            />
            </form>
            <Footer/>
        </div>
    );
};

export default ReservationEyeTestTime;
