import "./App.css";
import { useState, useEffect } from "react";
import Welcome from "./Components/Welcome.js";
import PlayerMode from "./Components/PlayerMode.js";
import Game from "./Components/Game.js";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPlayerMode, setShowPlayerMode] = useState(false);
  const [showGameMode, setShowGameMode] = useState(false);
  const [gameMode, setGameMode] = useState(null);

  // function that sets welcomepage to true in order to show
  const showWelcomePage = () => {
    setShowWelcome(true);
  };

  // sets showWelcome to true so that after load the welcome page is rendered
  useEffect(() => {
    showWelcomePage();
  }, []);

  // hides welcome page when start button is clicked and shows playermode page
  const handleStartButtonClick = () => {
    setShowWelcome(false);
    setShowPlayerMode(true);
  };
  // mode - represents the argument passed on
  // when the mode is clicked player mode doesn't render anymore and the game mode that was clicked renders
  const handlePlayerModeClick = (mode) => {
    setGameMode(mode);
    setShowPlayerMode(false);
    setShowGameMode(true);
  };
  return (
    <div className="wrapper">
      {showWelcome && <Welcome startButtonClick={handleStartButtonClick} />}
      {showPlayerMode && <PlayerMode playerModeClick={handlePlayerModeClick} />}
      {showGameMode && (
        <Game mode={gameMode} playerModeClick={handlePlayerModeClick} showPlayerMode = {setShowPlayerMode} />
      )}
    </div>
  );
}

export default App;
