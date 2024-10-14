import styles from "./singleVisionLenses.module.css";
import data from "../../mock/singleVisionLensesDescription/singleVisionLensesDescription";

const SingleVisionLenses = () => {
    const { singleVisionLenses, headersTexts, coatingsOnLensesAndOtherEnhancements, materialDescription } = data;

    return (
        <div className={styles.container}>
            <p>{singleVisionLenses[0].generalDescription}</p>
        </div>
    );
};

export default SingleVisionLenses;
