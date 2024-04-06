import { useEffect } from "react";
const PlayGame = ({ mode }) => {
  const startGame = () => {
    if (mode === "easy") {
      console.log("easy mode");
    } else if (mode === "moderate") {
      console.log("moderate mode");
    } else if (mode === "hard mode") {
      console.log("hard mode");
    }
  };
  useEffect(() => {
    startGame();
  }, [mode]);

  return <></>;
};

export default PlayGame;
