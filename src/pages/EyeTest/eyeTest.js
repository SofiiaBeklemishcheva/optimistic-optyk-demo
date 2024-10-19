import styles from "./eyeTest.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import stepsOfEyeTestForGlassesData from "../../mock/eyeTestForGlassesSteps/eyeTestForGlassesSteps";
import stepsOfEyeTestForContactLensesData from "../../mock/eyeTestForLensesSteps/eyeTestForLensesSteps";
import eyeTestCostData from "../../mock/eyeTestCost/eyeTestCost";
import Footer from "../../components/footer/footer";
import EyeTestStep from '../../components/eyeTestStep/eyeTestStep';
import Button from "../../components/button/button";
import ServicesPriceListItem from "../../components/servicesPriceListItem/servicesPriceListItem";



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


                <div className={styles.eyeTestDescriptionContainer}>
                    <div className={styles.iconContainer}>
                    <img className={styles.generalDescriptionImage} alt={""} src={"/assets/optometrist (2).png"}/>
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
                    <ServicesPriceListItem
                        key={index}
                        label={item.label}
                        price={item.price}
                    />
                ))}
                </div>

                <div className={styles.eyeTestGeneralDescriptionContainer}>
                    <div className={styles.iconContainer}>
                    <img className={styles.generalDescriptionImage} alt={""} src={"/assets/warning (1).png"}/>
                    </div>

                    <div className={styles.descriptionContainer}>
                        <p className={styles.descriptionText}>
                        Nasze usługi obejmują ocenę ostrości widzenia oraz doboru okularów i soczewek kontaktowych. Warto jednak zaznaczyć, że nie przeprowadzamy diagnostyki chorób oczu, nie wystawiamy recept na leki, ani nie wykonujemy procedur związanych z wyjmowaniem ciał obcych z oczu.
                        </p>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                <Button
                    label={"Umów wizytę"}
                    onClickFunction={navigateToReservationEyeTest}
                    buttonSize={"standard"}
            />
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default EyeTest;
