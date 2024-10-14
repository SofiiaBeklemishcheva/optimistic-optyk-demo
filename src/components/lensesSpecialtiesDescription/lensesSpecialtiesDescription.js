import styles from "./servicesPriceListItem/servicesPriceListItem.module.css";

const LensesSpecialtyTile = ({label, description}) => {


    return (
        <div className={styles.spiecialtyDescriptionContainer}>
           <h1 className={styles.spiecialtyLabel}>{label}</h1>
           <p className={styles.spiecialtyDescription}>{description}</p>
        </div>
    );
};

export default LensesSpecialtyTile;