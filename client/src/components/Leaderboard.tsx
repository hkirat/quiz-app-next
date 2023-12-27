import { Nav } from '.';
import { mockLeaderboardData } from '../mocks/leaderboard-mock';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';

export function Leaderboard() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="max-w-[1000px]">
        <h1 className="text-5xl">Leaderboard</h1>
        <HorizontalChart playersData={mockLeaderboardData.data} />
      </div>
    </div>
  );
}

Chart.register(CategoryScale);
type LeaderboardChartType = {
  playersData: {
    username: string;
    profilePicture: string;
    points: number;
  }[];
};

function HorizontalChart({ playersData }: LeaderboardChartType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chartData, _] = useState({
    labels: playersData.map((data) => data.username),
    datasets: [
      {
        label: 'Points',
        data: playersData.map((data) => data.points),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <Bar
      data={chartData}
      options={{
        responsive: true,
        indexAxis: 'y',
        layout: {
          padding: 0,
        },
        plugins: {
          title: {
            display: true,
            text: 'Scores of all players',
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
