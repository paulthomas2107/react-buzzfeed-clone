const QuestionBlock = ( {question}) => {
  
    return (
        <button className="question-block">
            <img/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.url}>{question.credit}</a>
                <a href="https://unsplash.com">Unsplash</a>
            </p>
        </button>
    )
}

export default QuestionBlock;