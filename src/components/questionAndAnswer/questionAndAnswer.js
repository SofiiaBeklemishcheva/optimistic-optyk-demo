import styles from "./questionAndAnswer.module.css";
import {useState} from "react";

const QuestionAndAnswer = ({questionText, answerText}) => {

    const [isAnswerVisible, setIsAnswerVisible] = useState(false)

    const toggleAnswerVisibility =()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }

    const questionContainerClassName = isAnswerVisible
    ?  `${styles.questionIsClicked} ${styles.questionContainerIsClicked}`
        : `${styles.question} ${styles.questionContainer}`;

    const questionTextClassName = isAnswerVisible
        ? styles.questionIsClicked
        : styles.question;

    const moreInformationButtonImageClassName = isAnswerVisible
        ?  `${styles.moreInformationButtonImage} ${styles.moreInformationButtonImageRotated}`
        : styles.moreInformationButtonImage ;

    return (
        <div className={styles.container}>
            <div className={questionContainerClassName}>
            <p className={questionTextClassName}>{questionText}</p>
               <button className={styles.moreInformationButton} onClick={toggleAnswerVisibility}>
                   <img className={moreInformationButtonImageClassName} src={"https://optimistic-optyk-demo-sofiiabeklemishchevas-projects.vercel.app/assets/more.png"} alt={"Zobacz odpowiedź"}/>
               </button>
            </div>
            {isAnswerVisible &&
                <p className={styles.answer}>
                    {answerText}
                </p>}

        </div>
    );
};

export default QuestionAndAnswer;