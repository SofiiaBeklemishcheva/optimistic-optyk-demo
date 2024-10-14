import styles from "./availableServices/availableServices.mosule.css";

const Button = ({label, onClickFunction}) => {


    return (
       <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onClickFunction}>{label}</button>
       </div>
    );
};

export default Button;