import styles from "./eyeTest.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import stepsOfEyeTestForGlassesData from "../../mock/eyeTestStepsDescription/eyeTestStepsDescription";
import stepsOfEyeTestForContactLensesData from "../../mock/eyeTestStepsDescription/eyeTestStepsDescription";
import eyeTestCostData from "../../mock/eyeTestCost/eyeTestCost";
import Footer from "../../components/footer/footer";
import EyeTestStep from '../../components/eyeTestStep/eyeTestStep';
import AvailableServices from "../../mock/availableServices/availableServices";
import Button from "../../components/button/button";



const EyeTest = () => {

    const testForContactsSteps = stepsOfEyeTestForContactLensesData.stepsOfEyeTestForContactLenses;
    const testForGlassesSteps = stepsOfEyeTestForGlassesData.stepsOfEyeTestForGlasses;
    const eyeTestPrices = eyeTestCostData.eyeTestCost;

    const navigate = useNavigate();
    const navigateToReservationEyeTest =() =>{
        navigate("/reservation")
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>


                <div className={styles.eyeTestGeneralDescriptionConrainer}>
                    <div className={styles.iconContainer}>
                    <img className={styles.generalDescriptionImage} alt={""} src={""}/>
                    </div>

                    <ul className={styles.descriptionContainer}>
                        <li>Badanie przeprowadza optometrysta</li>
                        <li>Gwarancja recepty*</li>
                        <li>Badamy dorosłych oraz młodzież od 12 roku życia</li>
                    </ul>
                </div>

                <h1>Proces przeprowadzenia badania pod kątem doboru okularów korekcyjnych</h1>

                <div className={styles.stepsDescriptionContainer}>
                {testForGlassesSteps.map((step, index) => (
                    <EyeTestStep
                        key={index}
                        iconLink ={step.iconLink}
                        altText = {step.altText}
                        stepNumber = {step.stepNumber}
                        shortDescription = {step.shortDescription}
                    />
                ))}
                </div>


                <h1>Proces przeprowadzenia badania pod kątem doboru soczewek kontaktowych</h1>

                <div className={styles.stepsDescriptionContainer}>
                {testForContactsSteps.map((step, index) => (
                    <EyeTestStep
                        key={index}
                        iconLink ={step.iconLink}
                        altText = {step.altText}
                        stepNumber = {step.stepNumber}
                        shortDescription = {step.shortDescription}
                    />
                ))}
                </div>

                <h1>Koszt badania wzroku</h1>

                <div className={styles.priceListContainer}>
                {eyeTestPrices.map((item, index) => (
                    <AvailableServices
                        key={index}
                        label={item.label}
                        price={item.price}
                    />
                ))}
                </div>

                <div className={styles.eyeTestGeneralDescriptionConrainer}>
                    <div className={styles.iconContainer}>
                    <img className={styles.generalDescriptionImage} alt={""} src={""}/>
                    </div>

                    <div className={styles.descriptionContainer}>
                        <p className={styles.descriptionText}>
                        Nasze usługi obejmują ocenę ostrości widzenia oraz doboru okularów i soczewek kontaktowych. Warto jednak zaznaczyć, że nie przeprowadzamy diagnostyki chorób oczu, nie wystawiamy recept na leki, ani nie wykonujemy procedur związanych z wyjmowaniem ciał obcych z oczu.
                        </p>
                    </div>
                </div>

                <Button
                    label={"Umów wizytę"}
                    onClickFunction={navigateToReservationEyeTest}
                    buttonSize={"standard"}
            />

            </div>
            <Footer/>
        </div>
    );
};

export default EyeTest;
