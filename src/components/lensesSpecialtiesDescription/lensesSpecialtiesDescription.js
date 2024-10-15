import styles from "./lensesSpecialtiesDescription.module.css";

const LensesSpecialtyTile = ({label, description}) => {


    return (
        <div className={styles.specialtyDescriptionContainer}>
           <h1 className={styles.specialtyLabel}>{label}</h1>
            {description.map((paragraph, index) => (
                <p key={index} className={styles.specialtyDescription}>{paragraph}</p>
            ))}
        </div>
    );
};

export default LensesSpecialtyTile;