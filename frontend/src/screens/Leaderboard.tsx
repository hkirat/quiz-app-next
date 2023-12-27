import { ArrowLeft, ArrowRight, ThumbsUp } from "lucide-react";

const data = [
  { val: 1000, name: "Ambriel" },
  { val: 975, name: "Pavan Sunke" },
  { val: 971, name: "Namish Kapoor" },
  { val: 960, name: "Ambriel" },
  { val: 925, name: "Pavan Sunke" },
  { val: 900, name: "Namish Kapoor" },
  { val: 870, name: "Ambriel" },
  { val: 850, name: "Pavan Sunke" },
  { val: 830, name: "Namish Kapoor" },
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
          .sort((a, b) => b.val - a.val)
          .slice(0, 10)
          .map((item) => (
            <div className="flex mb-2 gap-4 items-center">
              <h3 className="font-semibold text-2xl w-[100px] text-right">
                {item.val} p
              </h3>
              <div
                className="animate-slide"
                style={{
                  height: "3rem",
                  width: item.val * 0.75,
                  backgroundColor: getRandomRgbColor(),
                }}
              ></div>
              <h3 className="text-2xl">{item.name}</h3>
            </div>
          ))}
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
