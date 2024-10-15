import styles from "./button.module.css";
import {useNavigate} from "react-router-dom";

const Button = ({label, onClickFunction, buttonSize}) => {
    const navigate = useNavigate();

    let buttonStyle;

    switch (buttonSize){
        case "large":
            buttonStyle = styles.large
            break;
        default:
            buttonStyle = styles.button
    }

    return (
       <div className={styles.buttonContainer}>
        <button className={buttonStyle} onClick={onClickFunction}>{label}</button>
       </div>
    );
};

export default Button;