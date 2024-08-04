import Card from "./Card";

export type LeaderBoardData = {
  id: number;
  points: number;
  name: string;
  image: string;
};

export function LeaderBoard({
  leaderboardData,
}: {
  leaderboardData: LeaderBoardData[];
}) {
  return (
    <div className="bg-opacity-20 bg-white backdrop-blur-5 border border-opacity-30 border-solid border-white p-6 rounded-lg shadow-xl">
      <h1 className="text-2xl text-slate-600 text-center my-4">
        Leaderboard Results 🚀
      </h1>
      <div className="">
        {leaderboardData.map((data, index) => (
          <div className=" flex justify-center">
            <Card
              key={data.id}
              sno={index + 1}
              name={data.name}
              points={data.points}
              image={data?.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
