import { useState } from "react";
import RightAnswer from "./RightAnswer.js";

const EasyMode = ({ num1, num2, operation, choices, generatedAnswer }) => {
  console.log(choices);
  // initialize state to check if the clicked answer is true or not 
  const [answerClick, setAnswerClick] = useState(false);

  const handleAnswerClick = (itemValue) => {
    console.log(answerClick);
    if (Number(itemValue) === generatedAnswer) {
      setAnswerClick(true);
      console.log("correct!!!");
    } else {
      setAnswerClick(false);
    }
  };

  //if answer is true then show the Right Answer component 

  if (answerClick) {
    return <RightAnswer />;
  }

  return (
    <div className="easyModePage">
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

export default EasyMode;
