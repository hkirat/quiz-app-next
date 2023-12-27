import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Que from "./Components/Que";
function App() {
  const question = {
    title: "What is Harkirat Currently ?",
    choices: ["Mohali", "Chandigarh", "Delhi", "God knows"],
    image: "url-to-your-image.jpg",
  };
  return (
    <>
      <Que {...question} />
    </>
  );
}

export default App;
