import { useLocation } from "react-router-dom";

function ResultPage() {
    const location = useLocation();
    const { score, total } = location.state || { score: 0, total: 0 };
    return (
        <div>
            <h2>Quiz Completed!</h2>
            <h3>Your score: {score}/{total}</h3>
        </div>
    );
}
export default ResultPage;