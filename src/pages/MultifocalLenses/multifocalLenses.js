import styles from "./multifocalLenses.module.css";
import generalDescriptionData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import bifocalLensesDescriptionData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import relaxLensesDescriptionData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import officeLensesDescriptionData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import progressiveLensesDescriptionData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import Footer from "../../components/footer/footer";

const MultifocalLenses = () => {

    const generalDescription = generalDescriptionData.generalDescription 
    const bifocalLensesDescription = bifocalLensesDescriptionData.bifocalLensesDescription 
    const relaxLensesDescription = relaxLensesDescriptionData.relaxLensesDescription 
    const officeLensesDescription = officeLensesDescriptionData.officeLensesDescription 
    const progressiveLensesDescription = progressiveLensesDescriptionData.progressiveLensesDescription 

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>

            <p>{generalDescription}</p>

            <h1>{bifocalLensesDescription.header}</h1>

            <p>{bifocalLensesDescription.descriptionP1}</p>
            <p>{bifocalLensesDescription.descriptionP2}</p>
            <p>{bifocalLensesDescription.descriptionP3}</p>
            <p>{bifocalLensesDescription.descriptionP4}</p>

            <h1>{relaxLensesDescription.header}</h1>
            
            <p>{relaxLensesDescription.descriptionP1}</p>
            <p>{relaxLensesDescription.descriptionP2}</p>
            <p>{relaxLensesDescription.descriptionP3}</p>

            <h1>{officeLensesDescription.header}</h1>
            
            <p>{officeLensesDescription.descriptionP1}</p>
            <p>{officeLensesDescription.descriptionP2}</p>
            <p>{officeLensesDescription.descriptionP3}</p>
            <p>{officeLensesDescription.descriptionP4}</p>

            <h1>{progressiveLensesDescription.header}</h1>
            
            <p>{progressiveLensesDescription.descriptionP1}</p>
            <p>{progressiveLensesDescription.descriptionP2}</p>
            <p>{progressiveLensesDescription.descriptionP3}</p>
            <p>{progressiveLensesDescription.descriptionP4}</p>
            <p>{progressiveLensesDescription.descriptionP5}</p>

            </div>

            <Footer/>
        </div>
    );
};

export default MultifocalLenses;