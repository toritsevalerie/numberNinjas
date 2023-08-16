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

  const showWelcomePage = () => {
    setShowWelcome(true);
  };

  useEffect(() => {
    showWelcomePage();
  }, []);

  const handleStartButtonClick = () => {
    setShowWelcome(false);
    setShowPlayerMode(true);
  };

  const handlePlayerModeClick = (mode) => {
    setGameMode(mode);
    setShowPlayerMode(false);
    setShowGameMode(true);
  };
  return (
    <div className="wrapper">
      {showWelcome && <Welcome startButtonClick={handleStartButtonClick} />}
      {showPlayerMode && <PlayerMode playerModeClick={handlePlayerModeClick} />}
      {showGameMode && <Game mode={gameMode} />}
    </div>
  );
}

export default App;
