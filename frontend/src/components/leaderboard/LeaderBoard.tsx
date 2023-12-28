import { useEffect, useState } from "react";
import { PointBar } from "./PointBar";

export type PlayersType = {
  username: string;
  profilePicture?: string;
  points: number;
};

const playersData: PlayersType[] = [
  {
    username: "one",
    points: 1000,
  },
  {
    username: "two",
    points: 900,
  },
  {
    username: "three",
    points: 800,
  },
  {
    username: "four",
    points: 700,
  },
  {
    username: "five",
    points: 600,
  },
];

const colors = ["#E63946", "#A85751", "#A8DADC", "#457B9D", "#1D3557"];

export const LeaderBoard = () => {
  const [players, setPlayers] = useState<PlayersType[]>([]);

  useEffect(() => {
    setPlayers(playersData);
    console.log(players);
  }, []);
  return (
    <div className="w-3/5 h-screen m-auto flex items-center">
      <section className="w-full">
        <section>
          <h1 className="text-6xl mb-4">LeaderBoard</h1>
        </section>
        <section className="flex justify-center items-center">
          <section className="w-1/2 grid grid-flow-row">
            {players.map((player, i) => (
              <PointBar key={i} player={player} color={colors[i]} />
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};
