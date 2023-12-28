import { useEffect, useRef } from "react";
import { PlayersType } from "./LeaderBoard";
import { gsap } from "gsap";

type Props = {
  player: PlayersType;
  color: string;
};

export const PointBar = ({ player, color }: Props) => {
  const pointbar: any = useRef(null);
  console.log(color);
  useEffect(() => {
    gsap.to(pointbar.current, {
      width: `${player.points / 10 / 2}%`,
      duration: 3,
      background: color,
    });
  });
  return (
    <>
      <section className="flex m-4">
        <div className="w-1/6 text-right pr-2">{player.points}pts</div>
        <div
          ref={(el) => (pointbar.current = el)}
          className="w-4 h-8 rounded-r-2xl"
        ></div>
        <img src="./vite.svg" alt="" />
        <div>{player.username}</div>
      </section>
    </>
  );
};
