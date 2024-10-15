import styles from "./lensesManufacturerButton.module.css";

const LensesManufacturerButton = ({link, label}) => {


    return (
        <a href={link} className={styles.buttonContainer}>
           {label}
        </a>
    );
};

export default LensesManufacturerButton;