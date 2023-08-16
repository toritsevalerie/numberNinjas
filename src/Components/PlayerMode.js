const PlayerMode = ({ playerModeClick }) => {
  return (
    <div className="playerModeOptions">
      <button
        onClick={() => {
          playerModeClick("easy");
        }}
      >
        EASY{" "}
      </button>
      <button
        onClick={() => {
          playerModeClick("moderate");
        }}
      >
        MODERATE
      </button>
      <button
        onClick={() => {
          playerModeClick("hard");
        }}
      >
        HARD
      </button>
    </div>
  );
};

export default PlayerMode;
