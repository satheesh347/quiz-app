function Result({ score, total }) {
    return (
        <div>
            <h2>Quiz Completed!</h2>
            <h3>Your score: {score}/{total}</h3>
        </div>
    );
}
export default Result;