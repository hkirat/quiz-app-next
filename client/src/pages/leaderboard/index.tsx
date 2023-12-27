import React from "react";
import LeaderboardUI from "./LeaderboardUI";
import { players } from "./tempLeaderboardData";
import "./index.css";

const Leaderboard = () => {
  return <LeaderboardUI {...{ players }} />;
};

export default Leaderboard;
