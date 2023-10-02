const WrongAnswer = ({ playerModeClick, resetAnswer, currentMode }) => {
  return (
    <div>
      <p>OH NO, TRY AGAIN!</p>
      <button
        onClick={() => {
          console.log("Button clicked!");
          playerModeClick(currentMode);
          resetAnswer();
        }}
      >
        Next Question
      </button>
    </div>
  );
};

export default WrongAnswer;
