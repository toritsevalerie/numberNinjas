import { useEffect, useState } from "react";
import EasyMode from "./EasyMode";
import ModerateMode from "./ModerateMode";
import HardMode from "./HardMode";

const Game = ({ mode, playerModeClick, showPlayerMode }) => {
  
  // define states needed in the equation
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("");
  const [generatedAnswer, setGeneratedAnswer] = useState(0);
  const [choices, setChoices] = useState([]);
  const [gameCount, setGameCount] = useState(0);

  const startGame = () => {
    //shuffle function

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements at i and j
      }
      return array;
    };
    if (mode === "easy") {
      console.log("easy modeeee");

      // setting the random numbers to variables, this will be the numbers in the equation

      const randomNumberOne = Math.floor(Math.random() * 10) + 1;
      const randomNumberTwo = Math.floor(Math.random() * 10) + 1;
      const operations = ["+", "-"];
      const randomOperation =
        operations[Math.floor(Math.random() * operations.length)];

      // Calculate answer based on chosen operation.
      let answer;
      if (randomOperation === "+") {
        answer = randomNumberOne + randomNumberTwo;
      } else {
        answer = randomNumberOne - randomNumberTwo;
      }

      // assigning the updater function to variables
      setNum1(randomNumberOne);
      setNum2(randomNumberTwo);
      setOperation(randomOperation);
      setGeneratedAnswer(answer);

      // generating potential choices
      // create variable to hold the array of option, starting with the answer first

      let answerChoices = [answer];

      // using 'while' to continiusly run a loop if the answer option is less than 3
      while (answerChoices.length < 3) {
        // variable that holds the randomChoice option that users can pick from
        const randomOption = answer + Math.floor(Math.random() * 5) - 2;
        if (!answerChoices.includes(randomOption)) {
          answerChoices.push(randomOption);
        }
      }

      //shuffle array of answers
      shuffleArray(answerChoices);

      // assign updater function to the array of potential answers
      setChoices(answerChoices);
    } else if (mode === "moderate") {
      console.log("moderate modeeeeee");
      const randomNumberOne = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
      const randomNumberTwo = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
      const operations = ["+", "-"];
      const randomOperation =
        operations[Math.floor(Math.random() * operations.length)];

      // Calculate answer based on chosen operation.
      let answer;
      if (randomOperation === "+") {
        answer = randomNumberOne + randomNumberTwo;
      } else {
        answer = randomNumberOne - randomNumberTwo;
      }

      // assigning the updater function to variables
      setNum1(randomNumberOne);
      setNum2(randomNumberTwo);
      setOperation(randomOperation);
      setGeneratedAnswer(answer);

      // generating potential choices
      // create variable to hold the array of option, starting with the answer first

      let answerChoices = [answer];

      // using 'while' to continiusly run a loop if the answer option is less than 3
      while (answerChoices.length < 3) {
        // variable that holds the randomChoice option that users can pick from
        const randomOption = answer + Math.floor(Math.random() * 5) - 2;
        if (!answerChoices.includes(randomOption)) {
          answerChoices.push(randomOption);
        }
      }

      //shuffle array of answers
      shuffleArray(answerChoices);

      // assign updater function to the array of potential answers
      setChoices(answerChoices);
    } else if (mode === "hard") {
      console.log("hard modeeee");

      const randomNumberOne = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
      const randomNumberTwo = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
      const operations = ["*"];
      const randomOperation =
        operations[Math.floor(Math.random() * operations.length)];

      // Calculate answer based on chosen operation.
      let answer;

      answer = randomNumberOne * randomNumberTwo;

      // assigning the updater function to variables
      setNum1(randomNumberOne);
      setNum2(randomNumberTwo);
      setOperation(randomOperation);
      setGeneratedAnswer(answer);

      // generating potential choices
      // create variable to hold the array of option, starting with the answer first

      let answerChoices = [answer];

      // using 'while' to continiusly run a loop if the answer option is less than 3
      while (answerChoices.length < 3) {
        // variable that holds the randomChoice option that users can pick from
        const randomOption = answer + Math.floor(Math.random() * 5) - 2;
        if (!answerChoices.includes(randomOption)) {
          answerChoices.push(randomOption);
        }
      }

      //shuffle array of answers
      shuffleArray(answerChoices);

      // assign updater function to the array of potential answers
      setChoices(answerChoices);
    } else {
      console.log("idk");
    }
  };

  useEffect(() => {
    startGame();
  }, [mode, gameCount]);

  const handleNextQuestion = (mode) => {
    playerModeClick(mode);
    setGameCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {mode === "easy" && (
        <EasyMode
          mode={mode}
          num1={num1}
          num2={num2}
          choices={choices}
          operation={operation}
          generatedAnswer={generatedAnswer}
          playerModeClick={handleNextQuestion}
        />
      )}
      {mode === "moderate" && (
        <ModerateMode
          mode={mode}
          num1={num1}
          num2={num2}
          choices={choices}
          operation={operation}
          generatedAnswer={generatedAnswer}
          playerModeClick={handleNextQuestion}
        />
      )}
      {mode === "hard" && (
        <HardMode
          mode={mode}
          num1={num1}
          num2={num2}
          choices={choices}
          operation={operation}
          generatedAnswer={generatedAnswer}
          playerModeClick={handleNextQuestion}
          showPlayerMode = {showPlayerMode}
        />
      )}
    </div>
  );
};
export default Game;
