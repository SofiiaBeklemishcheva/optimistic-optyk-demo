import styles from "./eyeTestStep.module.css";

const EyeTestStep = ({iconLink, altText, stepNumber,shortDescription}) => {


    return (
        <div className={styles.tileContainer}>
          <img src={iconLink} alt={altText} className={styles.icon}/>
        <h1 className={styles.stepNumber}>{stepNumber}</h1>
        <p className={styles.stepShortDescription}>{shortDescription}</p>
        </div>
    );
};

export default EyeTestStep;
