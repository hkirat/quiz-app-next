import { useEffect, useRef } from "react";
import { PlayersType } from "./LeaderBoard";
import { gsap } from "gsap";

type Props = {
  player: PlayersType;
  color: string;
};

export const PointBar = ({ player, color }: Props) => {
  const pointbar:  any = useRef(null);
  console.log(color);
  useEffect(() => {
    gsap.to(pointbar.current, {
      width: `${player.points / 10}%`,
      duration: 3,
      background: color,
    });
  });
  return (
    <>
      <section className="flex  m-10">
          <div className="mr-2">{player.points}pts</div>
        <div
          ref={(el) => (pointbar.current = el)}
          className="w-4 h-8 rounded-r-2xl"
          ></div>
        <div>{player.username}</div>
      </section>
    </>
  );
};
