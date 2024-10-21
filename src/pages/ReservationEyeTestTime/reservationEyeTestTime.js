import styles from "./reservationEyeTestTime.module.css";
import Footer from "../../components/footer/footer";
import InputFormComponent from "../../components/inputFormComponent/inputFormComponent";
import {useState} from "react";
import FormInputSelect from "../../components/formInputSelectComponent/formInputSelectComponent";
import checkboxLabelData from "../../mock/inputSelection/inputSelection";
import kindOfTestsData from "../../mock/inputSelection/inputSelection";
import timeData from "../../mock/inputSelection/inputSelection";
import addressData from "../../mock/inputSelection/inputSelection";
import InputComponentSubmit from "../../components/inputSubmitComponent/inputSubmitComponent";
import PopUp from "../../components/popUp/popUp";
import { useNavigate } from 'react-router-dom';



const ReservationEyeTestTime = () => {

    const address = addressData.address ;
    const checkboxLabel = checkboxLabelData.checkboxLabel;
    const kindOfTests = kindOfTestsData.kindOfTests;
    const time = timeData.time;

    const [clientName, setClientName] = useState("");
    const [clientSurname, setClientSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [mail, setMail] = useState("");
    const [age, setAge] = useState("");
    const [eyeTestDate, setEyeTestDate] = useState("");

    const [isPopUpVisible, setIsPopUpVisible] = useState(false)

    const submitController = (event) => {
        event.preventDefault();

        setIsPopUpVisible(true);
      };

      const navigate = useNavigate();
      const afterReservation = () => {
        setIsPopUpVisible(false); 
        navigate("/information"); 
    };


    console.log(address)
        return (
            <div className={styles.container}>
                    <div className={styles.pageContainer}>
                            <h1 className={styles.header}>Zapisz się na badanie wzroku</h1>
                    <form onSubmit={submitController}>
                        <FormInputSelect
                            placeholderText={"Wybierz rodzaj badania"}
                            buttonId="kindOfTest"
                            options={kindOfTests}
                        />
                        <FormInputSelect
                            placeholderText={"Wybierz lokalizację"}
                            buttonId="address"
                            options={address}
                        />
                        <InputFormComponent
                            placeholderName={"Wybierz datę"}
                            label={"eyeTestDate"}
                            labelText={"Wybierz datę"}
                            inputType={"date"}
                            id={"eyeTestDate"}
                            name={"eyeTestDate"}
                            eventHandler={setEyeTestDate}
                        />
                        <FormInputSelect
                            placeholderText={"Wybierz godzinę"}
                            buttonId="time"
                            options={time}
                        />

                            <InputFormComponent
                                placeholderName={"Imię"}
                                label={"clientName"}
                                inputType={"text"}
                                id={"clientName"}
                                name={"clientName"}
                                eventHandler={setClientName}
                            />
                            <InputFormComponent
                                placeholderName={"Nazwisko"}
                                label={"clientSurname"}
                                inputType={"text"}
                                id={"clientSurname"}
                                name={"clientSurname"}
                                eventHandler={setClientSurname}
                            />
                            <InputFormComponent
                                placeholderName={"Numer telefonu"}
                                label={"phoneNumber"}
                                inputType={"text"}
                                id={"phoneNumber"}
                                name={"phoneNumber"}
                                eventHandler={setPhoneNumber}
                            />
                            <InputFormComponent
                                placeholderName={"Mail"}
                                label={"mail"}
                                inputType={"email"}
                                id={"mail"}
                                name={"mail"}
                                eventHandler={setMail}
                            />
                            <InputFormComponent
                                placeholderName={"Wiek"}
                                label={"age"}
                                inputType={"number"}
                                id={"age"}
                                name={"age"}
                                eventHandler={setAge}
                            />
                        <InputFormComponent
                            labelText={checkboxLabel[0].label}
                            inputType="checkbox"
                            id="agreement"
                            name="agreement"
                            eventHandler={(checked) => console.log("Zgoda: ", checked)}
                        />

                                <div className= {styles.buttonContainer}>
                                <InputComponentSubmit
                                value= {"Umów się"}
                                />
                                </div>
                    </form>
                   
                    </div>
                    <Footer/>
                    {isPopUpVisible && <PopUp afterReservation={afterReservation}/>}
                    
            </div>
        );
};

export default ReservationEyeTestTime;
