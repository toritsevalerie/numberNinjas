const RestartLevel = ({
  playerModeClick,
  currentMode,
  restartCurrentModeAgain,
}) => {
  return (
    <div>
      <p>restart this level</p>
      <button
        onClick={() => {
          playerModeClick(currentMode);
          restartCurrentModeAgain();
        }}
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default RestartLevel;
