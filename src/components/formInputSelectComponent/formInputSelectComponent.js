import styles from "./formInputSelectComponent.module.css";


const FormInputSelect = ({buttonId, placeholderText, options = [] }) => {
    return (
        <div className={styles.inputComponentContainer}>

            <select className={styles.inputField} name={buttonId} id={buttonId} defaultValue="">
                <option value="" disabled hidden>
                    {placeholderText}
                </option>
                {options.map((option, index) => {
                    return (
                        <option className={styles.option} key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};


export default FormInputSelect;