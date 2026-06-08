function Question({ question, onAnswer, disabled = false }) {
    return (
        <div>
            <h2>{question.question}</h2>
            {question.options.map((option) => (
                <button
                    key={option}
                    onClick={() => onAnswer(option)}
                    disabled={disabled}
                    style={{ margin: "0.25rem" }}>
                    {option}
                </button>
            ))}
        </div>
    );
}
export default Question;