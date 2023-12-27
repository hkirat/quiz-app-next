import { EnterCode } from "./Pages/EnterCode";
import { EnterName } from "./Pages/EnterName";
import { GetReady } from "./Pages/GetReady";
import { LeaderBoard } from "./Pages/LeaderBoard";
import { QuestionPage } from "./Pages/QuestionPage";

function App() {
  const title = "What is the capital of India?";
  const image = "https://picsum.photos/200/300";
  const options = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
  const winners = [
    {
      name: "John1",
      image: "https://picsum.photos/200/300",
      points: 10,
    },
    {
      name: "John2",
      image: "https://picsum.photos/200/300",
      points: 10,
    },
    {
      name: "John3",
      image: "https://picsum.photos/200/300",
      points: 10,
    },
  ];

  return (
    <div className="">
      <EnterCode />
      <EnterName />
      <GetReady playerName="John" />
      <QuestionPage title={title} image={image} options={options} />
      <LeaderBoard winners={winners} />
    </div>
  );
}

export default App;
