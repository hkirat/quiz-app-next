
import Card from "./Card";

export function LeaderBoard({ leaderboardData }: {
    leaderboardData: {
        points: number;
        username: string,
        profilePicture: string
    }[]
}) {

    return (
        <div className="bg-opacity-20 bg-white backdrop-blur-5 border border-opacity-30 border-solid  p-6 rounded-lg">
            <h1 className="text-2xl lg:text-5xl text-center my-4">
                Leaderboard Results 🚀
            </h1>
            <div className="">
                {leaderboardData.sort((a, b) => b.points - a.points).map((el, index) => (
                    <div className=" flex justify-center">
                        <Card
                            sno={index + 1}
                            name={el.username}
                            points={el.points}
                            image={el.profilePicture}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
