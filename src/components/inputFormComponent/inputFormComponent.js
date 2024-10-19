import styles from "./inputFormComponent.module.css";

const InputFormComponent = ({
  label,
  labelText,
  inputType,
  id,
  name, placeholderName,
  eventHandler
}) => {
  let nameOfClass =
      inputType === "checkbox" ? styles.checkboxInputField :
          inputType === "date" ? styles.dateInputField :
              styles.inputField;

  let inputLabelClassName =
      inputType === "checkbox" ? styles.inputCheckboxLabel :
          inputType === "date" ? styles.inputLabel :
              styles.inputLabel;


  return (
    <div className={styles.inputComponentContainer}>
      <label className={inputLabelClassName} htmlFor={label}>
        {labelText}
      </label>
      {inputType === "checkbox" ? (
        <input
          className={nameOfClass}
          type={inputType}
          id={id}
          name={name}
          onChange={(event) => eventHandler(event.target.value)}
        ></input>
      ) : (
        <input
            placeholder={placeholderName}
          className={nameOfClass}
          type={inputType}
          id={id}
          name={name}
          onChange={(event) => eventHandler(event.target.value)}
        ></input>
      )}
    </div>
  );
};

export default InputFormComponent;