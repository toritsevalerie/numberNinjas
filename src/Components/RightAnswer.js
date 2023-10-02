const RightAnswer = ({ playerModeClick, resetAnswer, currentMode }) => {
  return (
    <div>
      <p>YAH YOU GOT THE ANSWER!</p>
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

export default RightAnswer;
