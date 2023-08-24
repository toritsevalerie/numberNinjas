import { useEffect, useState } from "react";
import EasyMode from "./EasyMode";

const Game = ({ mode }) => {
  // define states needed in the equation
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("");
  const [generatedAnswer, setGeneratedAnswer] = useState(0);
  const [choices, setChoices] = useState([]);

  const startGame = () => {
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

      const answerChoices = [answer];

      // using 'while' to continiusly run a loop if the answer option is less than 3
      while (answerChoices.length < 3) {
        // variable that holds the randomChoice option that users can pick from
        const randomOption = answer + Math.floor(Math.random() * 5) - 2;
        if (!answerChoices.includes(randomOption)) {
          answerChoices.push(randomOption);
        }
      }

      //shuffle array of answers

      // assign updater function to the array of potential answers
      setChoices(answerChoices);
      
    } else if (mode === "moderate") {
      console.log("moderate modeeeeee");
    } else if (mode === "hard") {
      console.log("hard modeeee");
    } else {
      console.log("idk");
    }
  };

  useEffect(() => {
    startGame();
  }, [mode]);

  return (
    <div>
      {mode === "easy" && (
        <EasyMode
          num1={num1}
          num2={num2}
          choices={choices}
          operation={operation}
          generatedAnswer={generatedAnswer}
        />
      )}
    </div>
  );
};
export default Game;
