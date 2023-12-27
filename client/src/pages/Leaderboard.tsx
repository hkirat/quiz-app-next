import React from "react";

interface User {
  username: string;
  profilePicture: string;
  points: number;
}

interface LeaderboardBarProps {
  user: User;
  color: string;
}

const data: User[] = [
  {
    username: "ABC",
    profilePicture:
      "https://img.flawlessfiles.com/_r/100x100/100/avatar/jujutsu_kaisen/File4.png",
    points: 100,
  },
  {
    username: "ABC",
    profilePicture:
      "https://img.flawlessfiles.com/_r/100x100/100/avatar/jujutsu_kaisen/File4.png",
    points: 90,
  },
  {
    username: "ABC",
    profilePicture:
      "https://img.flawlessfiles.com/_r/100x100/100/avatar/jujutsu_kaisen/File4.png",
    points: 80,
  },
  {
    username: "ABC",
    profilePicture:
      "https://img.flawlessfiles.com/_r/100x100/100/avatar/jujutsu_kaisen/File4.png",
    points: 50,
  },
];

const colorPallets: string[] = ["#176cfe", "#969cf5", "#ffc73a", "#ff403d", "#ff81ac"];

const LeaderboardBar: React.FC<LeaderboardBarProps> = ({ user, color }) => {
  return (
    <div className="flex justify-start items-center w-[100%] my-2">
      <div className="w-[60px] mr-2 text-2xl font-bold">{user.points}p</div>
      <div className="w-5/6 flex items-center">
        <div
          className="h-10 rounded-r-full"
          style={{ width: `${(user.points * 100) / 100}%`, background: color }}
        ></div>
        <img
          src={user?.profilePicture}
          alt=""
          className="aspect-square object-cover h-10 rounded-full"
        />
        <p className="text-2xl">{user.username}</p>
      </div>
    </div>
  );
};

const  Leaderboard: React.FC = ()=> {
  return (
    <div className="">
      <div className="text-4xl text-black py-10">Leaderboard</div>
      <div className="px-20 w-[100vw]">
        {data.length &&
          data.map((user, index) => {
            return (
              <LeaderboardBar
                key={index}
                user={user}
                color={colorPallets[index % colorPallets.length]}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Leaderboard;
