import { useEffect, useState } from "react";

const NextLevelPage = ({
  playerModeClick,
  currentMode,
  showPlayerMode,
  generatePlayerModeAfterGameComplete,
}) => {
  const [changeLevelMode, setChangeLevelMode] = useState("");
  const [showCompletedPopup, setShowCompletedPopup] = useState(false);

  const changeLevel = () => {
    if (currentMode === "easy") {
      setChangeLevelMode("moderate");
    } else if (currentMode === "moderate") {
      setChangeLevelMode("hard");
    } else {
      console.log("you completed the game");
      setShowCompletedPopup(true);
    }
  };

  useEffect(changeLevel, []);

  const handleOkClick = () => {
    generatePlayerModeAfterGameComplete();
    setShowCompletedPopup(false);
    showPlayerMode(true);
  };
  return (
    <div>
      <p>Congrats you made it to the next level </p>
      <button
        onClick={() => {
          playerModeClick(changeLevelMode);
        }}
      >
        Lets Go
      </button>

      {showCompletedPopup && (
        <div style={popupStyle}>
          <div style={modalStyle}>
            <p>Congratulations, you completed the game!</p>
            <button onClick={handleOkClick}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

// change to classname.styles and add to seperate file later
const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
};

export default NextLevelPage;
