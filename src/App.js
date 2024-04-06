import "./App.css";
import Nav from "./Components/Nav.js";
import LandingPage from "./Components/LandingPage.js";
import MathGame from "./Components/MathGame";
import Practice from "./Components/Practice.js";
import Footer from "./Components/Footer.js";
import HowItWorks from "./Components/HowItWorks.js";
import PlayGame from "./Components/PlayGame.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  //initialize state variable for mode/difficulty level
  const [mode, setMode] = useState("");

  const navigate = useNavigate();

  // function that handles the mode selected in the landingpage.js
  const handleSelectedAdditionMode = (selectedMode) => {
    setMode(selectedMode);
    console.log("mode clicked testing");

    navigate("/game"); //HOW TO CORRESPOND ROUTE WITH WHAT WAS CLICKED example: game/addition/easy
  };
  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage onSelectedAdittionMode={handleSelectedAdditionMode} />
          }
        />
        <Route path="/startGame" element={<MathGame />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/gameInstructions" element={<HowItWorks />} />
        <Route path="/game" element={<PlayGame mode={mode} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* DEC 12 - NEXT STEPS 
- 1. HOW TO CORRESPOND ROUTE WITH WHAT WAS CLICKED example: game/addition/easy
-2. /startGame --> make sure fucntionality also works there
-3. Complete Subtrcation, Multipilication
*/
