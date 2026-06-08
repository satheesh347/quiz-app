function ProgressBar({ current, total }) {
    const percentage = (current / total) * 100;
    return (
        <div style={{ border: "1px solid #000", width: "100%", height: "20px" }}>
            <div style={{ width: `${percentage}%`, height: "100%", backgroundColor: "blue" }}></div>
        </div>
    );
}
export default ProgressBar;