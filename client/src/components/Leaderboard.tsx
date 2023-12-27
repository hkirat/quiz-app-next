import { Nav } from '.';
import { mockLeaderboardData } from '../mocks/leaderboard-mock';

import './leaderboard.css';

export function Leaderboard() {
  return (
    <div className="h-screen">
      <Nav />
      <div>
        <h1 className="text-5xl text-center">Leaderboard</h1>
        <LeaderboardChart data={mockLeaderboardData.data} />
      </div>
    </div>
  );
}

// winners: {username: string, profilePicture?: string, points: number}[] => will be sorted
type LeaderboardChartType = {
  data: {
    username: string;
    profilePicture: string;
    points: number;
  }[];
};

function LeaderboardChart({ data }: LeaderboardChartType) {
  console.log(data);
  return (
    <>
      <div>
        {data.map((score, i) => (
          <ScoreItem
            key={i}
            username={score.username}
            score={score.points}
            profilePicture={score.profilePicture}
          />
        ))}
      </div>
    </>
  );
}

type ScoreItemProps = {
  username: string;
  score: number;
  profilePicture: string;
};
const ScoreItem = ({ username, score, profilePicture }: ScoreItemProps) => {
  return (
    <div className="scoreItem">
      <span className="userEmail">{username}</span>
      <span className="userScore">{score}</span>
      <img height={20} className="h-10" src={profilePicture} alt="pfp" />
    </div>
  );
};

export default ScoreItem;
