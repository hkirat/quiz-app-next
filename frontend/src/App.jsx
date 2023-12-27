import EnterName from './components/EnterName';
import Room from './components/Room';

function App() {
  const handleJoin = (roomCode) => {
    console.log(`Joining room ${roomCode}`);
  };

  return (
    <div className="App">
      <Room onJoin={handleJoin} />
      <EnterName onJoin={handleJoin} />
    </div>
  );
}

export default App;
