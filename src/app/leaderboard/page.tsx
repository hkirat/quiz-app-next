"use client";
import Leaderboard from "./_leadeboard";
function leaderboard() {
    return (
        <Leaderboard
            Data={[
                { username: "pxcvxv", points: 50 },
                { username: "pcvzx", points: 70 },
                { username: "pcv", points: 90 },
                { username: "pcvxcv", points: 100 },
                { username: "cvxp", points: 10 },
                { username: "xcvp", points: 30 },
            ]}
        />
    );
}

export default leaderboard;
