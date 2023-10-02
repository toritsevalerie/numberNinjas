import { useState } from "react";
import RightAnswer from "./RightAnswer.js";
import NextLevelPage from "./NextLevel.js";
import RestartLevel from "./RestartLevel.js";
import WrongAnswer from "./WrongAnswer.js";

const HardMode = ({
  num1,
  num2,
  operation,
  choices,
  generatedAnswer,
  playerModeClick,
  mode,
  showPlayerMode
}) => {
  console.log(choices);
  // initialize state to check if the clicked answer is true or not
  const [answerClick, setAnswerClick] = useState(false);
  //initialize state to count the number of correc answers they get
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  // intialize state that counts the number of wrong attempts
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  // intializing state to check for an ettmept to combat the wronganser component from rendering immediately after moderate mode is clicked/default mode
  const [attempted, setAttempted] = useState(false);

  const handleAnswerClick = (itemValue) => {
    setAttempted(true);
    console.log(answerClick);
    if (Number(itemValue) === generatedAnswer) {
      setAnswerClick(true);
      setCorrectAnswerCount((prevCount) => prevCount + 1);
    } else {
      setAnswerClick(false);
      setWrongAnswerCount((prevCount) => prevCount + 1);
    }
  };

  // function that counts right answer until it gets to 3 then renders nextLevel component

  if (correctAnswerCount === 5) {
    return (
      <NextLevelPage
        playerModeClick={playerModeClick}
        currentMode={mode}
        showPlayerMode={showPlayerMode}
        generatePlayerModeAfterGameComplete={() => {
          setCorrectAnswerCount(0);
          setWrongAnswerCount(0);
          setAnswerClick(false);
          setAttempted(false);
        }}
      />
    );
  }
  if (wrongAnswerCount === 5 || attempted === 10) {
    return (
      <RestartLevel
        playerModeClick={playerModeClick}
        currentMode={mode}
        restartCurrentModeAgain={() => {
          setCorrectAnswerCount(0);
          setWrongAnswerCount(0);
          setAnswerClick(false);
          setAttempted(false);
        }}
      />
    );
  }

  //if answer is true then show the Right Answer component

  if (answerClick) {
    return (
      <RightAnswer
        currentMode={mode}
        playerModeClick={playerModeClick}
        resetAnswer={() => {
          setAnswerClick(false);
          setAttempted(false); // Reset attempted state here
        }}
      />
    );
  }
  if (!answerClick && attempted) {
    return (
      <WrongAnswer
        currentMode={mode}
        playerModeClick={playerModeClick}
        resetAnswer={() => {
          setAnswerClick(false);
          setAttempted(false); // Reset attempted state here;
        }}
      />
    );
  }
  return (
    <div className="hardModePage">
      <h2>Lets Begin</h2>
      <div className="mathProblem">
        <p>
          {num1}
          {operation}
          {num2}=?
        </p>
        <ul>
          {choices.map((item, index) => (
            <li key={index}>
              <button onClick={() => handleAnswerClick(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HardMode;
