import styles from "./servicesPriceListItem/servicesPriceListItem.module.css";

const AvailableServices = ({label, price}) => {


    return (
        <div className={styles.serviceDescriptionContainer}>
           <h1 className={styles.serviceLabel}>{label}</h1>
           <h1 className={styles.servicePrice}>{price}</h1>
        </div>
    );
};

export default AvailableServices;