
export const LeaderBoard = ({leaderboard}: {leaderboard: any}) => {
    return (
      <div
        className='text-[rgba(255_255_255_0.87)] bg-[#242424]'
      >
        Leaderboard
        {JSON.stringify(leaderboard)}
      </div>
    );
}