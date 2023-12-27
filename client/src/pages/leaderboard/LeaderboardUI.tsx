import { player } from "./tempLeaderboardData";

interface props {
  players: player[];
}

const LeaderboardUI = (props: props) => {
  const { players } = props;
  const maxPoint: any = players.reduce((acc: any, curr) => {
    return acc > curr.points ? acc : curr.points;
  });

  return (
    <div className="leaderboard">
      <div className="leaderboard-heading">Leaderboard</div>
      <div className="leaderboard-list">
        {players
          .sort((a, b) => b.points - a.points)
          .map((player) => (
            <PlayerItem player={player} maxPoint={maxPoint} />
          ))}
      </div>
    </div>
  );
};

const PlayerItem = ({
  player,
  maxPoint,
}: {
  player: player;
  maxPoint: any;
}) => {
  const width =
    100 -
    parseInt((((maxPoint - player.points) / maxPoint) * 100).toPrecision(2));
  const colors = ["red", "blue", "pink", "black", "green", "yellow"];
  const rand = Math.floor(Math.random() * 6);
  console.log(rand);

  return (
    <div className="leaderboard-list-item">
      <div className="leaderboard-list-item-score">{player.points}p</div>
      <div
        className="leaderboard-list-item-point"
        style={{
          width: `${width}%`,
          height: "40px",
          backgroundColor: colors[rand],
        }}
      ></div>

      <div className="leaderboard-list-item-image">
        {player.profilePicture ? (
          <img src={player.profilePicture} alt="" />
        ) : (
          <div className="leaderboard-list-item-image-dummy"></div>
        )}
        <div className="leaderboard-list-item-name">{player.username}</div>
      </div>
    </div>
  );
};

export default LeaderboardUI;
