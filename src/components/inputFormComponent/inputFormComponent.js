import styles from "./inputFormComponent.module.css";

const InputFormComponent = ({
                              labelText,
                              inputType,
                              id,
                              name,
                              placeholderName,
                              eventHandler,
                            }) => {
  const renderInput = () => {
    switch (inputType) {
      case "checkbox":
        return (
            <div className={styles.checkboxContainer}>
              <label className={styles.inputCheckboxLabel} htmlFor={id}>
                {labelText}
              </label>
              <InputCheckbox
                  id={id}
                  name={name}
                  eventHandler={eventHandler}
              />
            </div>
        );
      case "date":
        return (
            <div className={styles.dateContainer}>
              <label className={styles.inputDateLabel} htmlFor={id}>
                {labelText}
              </label>
              <InputData id={id} name={name} eventHandler={eventHandler} />
            </div>
        );
      case "text":
      default:
        return (
            <div className={styles.textContainer}>
              <InputText
                  id={id}
                  name={name}
                  placeholderName={placeholderName}
                  eventHandler={eventHandler}
              />
            </div>
        );
    }
  };

  return <div className={styles.inputComponentContainer}>{renderInput()}</div>;
};

// Komponent do inputa typu "text" (bez labelki, tylko placeholder)
const InputText = ({ id, name, placeholderName, eventHandler }) => (
    <input
        placeholder={placeholderName}
        className={styles.inputField}
        type="text"
        id={id}
        name={name}
        onChange={(event) => eventHandler(event.target.value)}
    />
);

// Komponent do checkboxa (z większą labelką)
const InputCheckbox = ({ id, name, eventHandler }) => (
    <input
        className={styles.checkboxInputField}
        type="checkbox"
        id={id}
        name={name}
        onChange={(event) => eventHandler(event.target.checked)}
    />
);

// Komponent do inputa typu date (z mniejszą labelką)
const InputData = ({ id, name, eventHandler }) => (
    <input
        className={styles.dateInputField}
        type="date"
        id={id}
        name={name}
        onChange={(event) => eventHandler(event.target.value)}
    />
);

export default InputFormComponent;
