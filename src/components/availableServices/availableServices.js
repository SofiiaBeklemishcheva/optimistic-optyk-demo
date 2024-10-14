import styles from "./availableServices/availableServices.mosule.css";

const AvailableServices = ({label}) => {


    return (
        <h1 className={styles.serviceDescriptionContainer}>
           {label}
        </h1>
    );
};

export default AvailableServices;