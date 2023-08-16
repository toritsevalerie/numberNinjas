import { useEffect } from "react";


const Game = ({ mode }) => {

  const startGame = () => {
    if (mode === "easy") {
      console.log("easy modeeee");
    } else if (mode === "moderate") {
      console.log("moderate modeeeeee");
    } else if (mode === "hard") {
      console.log("hard modeeee");
    } else {
      console.log("idk");
    }
  };
  
  useEffect(() => {startGame()}, [mode]);
  

  return (
    <div>
      {mode === 'easy' && <p>Lets Begin</p> }
      
    </div>
  );
};
export default Game;
