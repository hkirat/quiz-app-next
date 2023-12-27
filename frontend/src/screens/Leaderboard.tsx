import { ArrowLeft, ArrowRight, ThumbsUp } from "lucide-react";

const data = [
  {
    points: 1000,
    username: "Ambriel",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1703385178754-f16e0a332e4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { points: 975, username: "Pavan Sunke" },
  { points: 971, username: "Namish Kapoor" },
  {
    points: 960,
    username: "Ambriel",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1703385178754-f16e0a332e4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { points: 925, username: "Pavan Sunke" },
  { points: 900, username: "Namish Kapoor" },
  { points: 870, username: "Ambriel" },
  { points: 850, username: "Pavan Sunke" },
  { points: 830, username: "Namish Kapoor" },
];

function getRandomRgbColor(): string {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function Leaderboard() {
  return (
    <div className="h-screen">
      <div className="mx-auto w-max bg-gray-100 p-4 rounded-lg">
        Join at menti.com | use code&nbsp;
        <span className="bg-white rounded-lg p-2">2538 0147</span>
      </div>
      <a className="absolute top-0 right-0 text-2xl font-semibold p-4">
        Mentimeter
      </a>
      <h1 className="my-8 text-8xl font-semibold">Leaderboard</h1>
      <div className="mx-auto w-max">
        {data
          .sort((a, b) => b.points - a.points)
          .slice(0, 10)
          .map((item) => {
            const color = getRandomRgbColor();
            return (
              <div className="flex mb-2 gap-4 items-center">
                <h3 className="font-semibold text-2xl w-[100px] text-right">
                  {item.points} p
                </h3>
                <div
                  className="animate-slide relative mr-4"
                  style={{
                    height: "3rem",
                    width: item.points * 0.75,
                    backgroundColor: color,
                  }}
                >
                  <div
                    className="absolute right-[-20px]  border-white border-2 h-12 w-12 rounded-full grid place-content-center overflow-hidden"
                    style={{ backgroundColor: color }}
                  >
                    {item.profilePicture ? (
                      <img
                        src={item.profilePicture}
                        alt="Profile picture"
                        className="h-10 w-10 object-cover rounded-full"
                      />
                    ) : null}
                  </div>
                </div>

                <h3 className="text-2xl">{item.username}</h3>
              </div>
            );
          })}
      </div>
      <div className="w-full absolute bottom-0 flex justify-between">
        <div>
          <button className="bg-gray-100 p-4 hover:bg-gray-200">
            <ArrowLeft />
          </button>
          <button className="bg-gray-100 p-4  hover:bg-gray-200">
            <ArrowRight />
          </button>
        </div>
        <button className="bg-slate-100 p-4">
          <ThumbsUp />
        </button>
      </div>
    </div>
  );
}
export default Leaderboard;
