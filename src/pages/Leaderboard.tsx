import { leaderboardData } from "../data/leaderboardData";
import Card from "./Card";

function Leaderboard() {
    leaderboardData.sort((a, b) => a.points - b.points);

    return (
        <div className="bg-black text-white p-8 rounded-md">
            <h1 className="text-2xl text-center my-4">Leaderboard Results</h1>
            <div className="overflow-y-scroll h-96">
                {leaderboardData.map((el, index) => (
                    <Card
                        sno={index + 1}
                        name={el.username}
                        points={el.points}
                        image={el.profilePicture}
                    />
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
