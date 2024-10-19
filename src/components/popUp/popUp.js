import styles from "../popUp/popUp.module.css";
import  questionAndAnswersTexts from "../../mock/questionsAndAnswers/questionsAndAnswers"
import QuestionAndAnswer from "../../components/questionAndAnswer/questionAndAnswer";


const PopUp = () => {

    const questionsAndAnswer =  questionAndAnswersTexts[6];

    return (
      <div className={styles.container}>
       <div className={styles.messageContainer}>
            <p className = {styles.messageText}>Dziękujemy za przesłanie zgłoszenia</p>
            <p className = {styles.messageText}>Prosimy czekać na potwierdzenie zarezerwowania terminu SMSem.</p>
       </div>
       <div className = {styles.preparationForEyeTest}>
        <QuestionAndAnswer
                questionText = {questionsAndAnswer.question}
                answerText = {questionsAndAnswer.answer}
        />

       </div>
      </div>
    );
  };
  
  export default PopUp;