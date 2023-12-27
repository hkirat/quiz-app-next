type UserData = {
  username: string;
  profilePicture?: string;
  points: number;
};

type LeaderBoardProps = {
  winner: UserData[];
};

const LeaderBoard: React.FC<LeaderBoardProps> = ({ winner }) => {
  const highestPoints = winner.reduce(
    (maxUser, currentUser) =>
      currentUser.points > maxUser.points ? currentUser : maxUser,
    winner[0]
  ).points;

  function setZIndexToZero(value: boolean) {
    const element = document.getElementById("foreground");
    if (value) {
      if (element) {
        element.style.zIndex = "-10";
      } else {
        console.error(`Element with ID ${"foreground"} not found.`);
      }
    } else {
      if (element) {
        element.style.zIndex = "10";
      } else {
        console.error(`Element with ID ${"foreground"} not found.`);
      }
    }
  }

  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  const mystyle = {
    overflow: 'hidden',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  };
  

  return (
    <>
      <div
        style={mystyle}
        className="h-auto w-auto bg-gray-950 overflow-x-hidden overflow-y-scroll p-5 text-3xl font-serif text-center"
        onMouseEnter={() => {
          setZIndexToZero(true);
        }}
        onMouseLeave={() => {
          setZIndexToZero(false);
        }}
      >
        {/* <div
          id="foreground"
          className="h-full w-full z-10 bg-gradient-to-b from-transparent via-transparent to-black fixed"
        ></div> */}
        <div className="w-full h-1/3 flex justify-center items-center my-5">
          {winner &&
            winner.sort((a, b) => b.points - a.points).slice(0, 3).map((data, index) => {
              return (
                <div key={index}>
                  <img
                    className="rounded-full p-0.5 text-center"
                    src={
                      data.profilePicture && isValidUrl(data.profilePicture)
                        ? data.profilePicture
                        : "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png"
                    }
                    alt="Profile picture"
                  />
                  {data.username}	&#40;{data.points}P&#41;
                </div>
              );
            })}
        </div>
        {winner &&
          winner.sort((a, b) => b.points - a.points).map((data, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${(data.points / highestPoints) * 100}%`,
                  backgroundColor: `rgba(255, 0, 0, ${data.points / 100})`,
                }}
                className={`relative mb-1 h-10 justify-end text-center w-full mx-0.5 mt-auto rounded-sm flex rounded-r-full hover:bg-blue-700 transition-all duration-1000 ease-in-out`}
              >
                <span className=" h-auto flex items-center font-mono text-xl mr-auto">
                  {Math.round(data.points)} Points
                </span>
                <span className="absoulte h-full flex items-center font-mono text-xl">
                  {" "}
                  {data.username}
                </span>
                <img
                  className="rounded-full p-0.5 text-center"
                  src={
                    data.profilePicture && isValidUrl(data.profilePicture)
                      ? data.profilePicture
                      : "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png"
                  }
                  alt="Profile picture"
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LeaderBoard;
