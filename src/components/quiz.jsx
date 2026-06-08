import { useState } from "react";
import { questions } from "../data/questions";
import ProgressBar from "./progressbar";
import Time from "./time";
import Result from "./result";
import Question from "./question";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [explanation, setExplanation] = useState("");

    const handleAnswer = (selected) => {
        const current = questions[currentQuestion];
        setSelectedAnswer(selected);
        setExplanation(current.explanation || "");

        if (selected === current.answer) {
            setScore((s) => s + 1);
        } else {
            setScore((s) => s - 0.5);
        }

        setShowExplanation(true);
    };

    const handleNext = () => {
        setShowExplanation(false);
        setSelectedAnswer(null);
        setExplanation("");
        setCurrentQuestion((i) => i + 1);
    };

    if (currentQuestion >= questions.length) {
        return <Result score={score} total={questions.length} />;
    }

    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.answer;

    return (
        <div>
            <ProgressBar current={currentQuestion} total={questions.length} />
            <Time />
            <Question question={question} onAnswer={handleAnswer} disabled={showExplanation} />
            {showExplanation && (
                <div style={{ marginTop: "1rem" }}>
                    <h3>{isCorrect ? "Correct!" : "Incorrect"}</h3>
                    <p>{explanation}</p>
                    <button onClick={handleNext}>Next Question</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
