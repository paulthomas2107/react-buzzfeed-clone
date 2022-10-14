import QuestionBlock from "./QuestionBlock";

const QuestionsBlocks = ({quizItem, setChosenAnswerItems, chosenAnswerItems, unansweredQuestionIds, setUnansweredQuestionIds}) => {
    
    return (
        <>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container">
                {quizItem.questions.map((question, _index) =>(
                    <QuestionBlock 
                    key={_index} 
                    question={question} 
                    setChosenAnswerItems={setChosenAnswerItems}
                    chosenAnswerItems={chosenAnswerItems}
                    setUnansweredQuestionIds={setUnansweredQuestionIds}
                    unansweredQuestionIds={unansweredQuestionIds}
                    />
                ))}
            </div>
        </>
    )
}

export default QuestionsBlocks;