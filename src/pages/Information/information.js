import styles from "./information.module.css";
import  questionAndAnswersTexts from "../../mock/questionsAndAnswers/questionsAndAnswers"
import QuestionAndAnswer from "../../components/questionAndAnswer/questionAndAnswer";
import Footer from "../../components/footer/footer";

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
            <Footer/>
        </div>
    );
};

export default Information;