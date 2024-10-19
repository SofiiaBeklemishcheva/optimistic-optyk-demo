import styles from "../inputSubmitComponent/inputSubmitComponent.module.css";

const InputComponentSubmit = ({ value }) => {
  return (
    <div className={styles.inputSubmitContainer}>
      <input className={styles.inputSubmit} type="submit" value={value} />
    </div>
  );
};

export default InputComponentSubmit;