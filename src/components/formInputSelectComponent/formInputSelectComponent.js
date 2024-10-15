import styles from "./formInputSelect.module.css";


const FormInputSelect = ({ label, buttonId, options = [] }) => {
  return (
    <div className={styles.inputComponentContainer}>
      <label className={styles.inputLabel} htmlFor={buttonId}>
        {label}
      </label>
      <select className={styles.inputField} name={buttonId} id={buttonId}>
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