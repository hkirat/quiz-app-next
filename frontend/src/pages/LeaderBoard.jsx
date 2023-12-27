import { useState, useEffect } from "react";
// import io from "socket.io-client";

const LeaderBoard = () => {
  const [winners, setWinners] = useState([
    { username: "User1", profilePicture: "url1", points: 100 },
    { username: "User2", profilePicture: "url2", points: 80 },
    { username: "User3", profilePicture: "url3", points: 120 },
  ]);

  useEffect(() => {
    // const socket = io("https://harkiratServer.co");
    //
    // socket.on("leaderboardUpdate", (updatedWinners) => {
    //   setWinners(updatedWinners);
    // });
    //
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const sortedWinners = [...winners].sort((a, b) => b.points - a.points);

  return (
    <>
      <h1 className="text-5xl m-4 text-center font-bold">Leaderboard</h1>
      <div className="leaderboard-container w-screen h-screen flex justify-center items-center">
        <table className="border-black border-2 text-3xl">
          <thead>
            <tr>
              <th className="border-2 border-black p-2 bg-blue-500">Rank</th>
              <th className="border-2 border-black p-2  bg-blue-500">
                Username
              </th>
              <th className="border-2 border-black p-2  bg-blue-500">
                Profile Picture
              </th>
              <th className="border-2 border-black p-2  bg-blue-500">Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedWinners.map((winner, index) => (
              <tr key={index}>
                <td className="border-2 border-black p-2 bg-blue-400">
                  {index + 1}
                </td>
                <td className="border-black border-2 p-2 bg-green-300">
                  {winner.username}
                </td>
                <td className="border-2 border-black p-2 bg-red-400">
                  {winner.profilePicture && (
                    <img
                      src={winner.profilePicture}
                      alt={`${winner.username}'s profile`}
                    />
                  )}
                </td>
                <td className="border-black border-2 p-2 bg-yellow-200">
                  {winner.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBoard;
