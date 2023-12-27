import { leaderboardData } from "../data/leaderboardData";
import Card from "./Card";

function Leaderboard() {
    leaderboardData.sort((a, b) => a.points - b.points);

    return (
        <div className="bg-opacity-20 bg-white backdrop-blur-5 border border-opacity-30 border-solid border-white dark:border-gray-800 dark:bg-gray-800 dark:bg-opacity-20 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl text-center my-4 text-white">
                Leaderboard Results 🚀
            </h1>
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
