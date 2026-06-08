function Leaderboard() {
    const leaderboardData = [
        { name: "Alice", score: 90 },
        { name: "Bob", score: 80 },
        { name: "Charlie", score: 70 },
    ];

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {leaderboardData.map((player, index) => (
                    <li key={index}>
                        {player.name}: {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Leaderboard;