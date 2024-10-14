import styles from "./information.module.css";
import  questionAndAnswersTexts from "../../mock/questionsAndAnswers/questionsAndAnswers"
import QuestionAndAnswer from "../../components/questionAndAnswer/questionAndAnswer";

const Information = () => {

    const questionsAndAnswers =  questionAndAnswersTexts;
    return (
        <div className={styles.container}>
            {questionsAndAnswers.map((row, index) => {
                return (
                    <div key={index} className={styles.tableRow}>
                        <QuestionAndAnswer
                            questionText = {row.question}
                            answerText = {row.answer}
                        />

                    </div>
                );
            })}
        </div>
    );
};

export default Information;