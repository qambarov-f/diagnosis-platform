import Style from "./Question.module.css";
import { getQuestion } from "../../../Api/getQuestions";
import { useState } from "react";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  const nextQuestion = () => {
    updateScore();
    if (currentQuestion < getQuestion.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
    }
  };
  const previousQuestion = () => {
    updateScore();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setClickedOption(0);
    } else {
      setCurrentQuestion(0);
      setClickedOption(0);
    }
  };

  const updateScore = () => {
    if (clickedOption === currentQuestion) {
      setScore(score + 1);
    }
  };

  const handleOptionClick = (index) => {
    setClickedOption(index + 1);
  };

  return (
    <div className={Style.container}>
      <div className={Style.question}>
        {getQuestion[currentQuestion].question}
      </div>

      <div className={Style.answersContainer}>
        {getQuestion[currentQuestion].answers.map((answer, index) => (
          <label className={Style.label} key={index}>
            <input
              type="radio"
              id={answer}
              name={`question-${currentQuestion}`}
              className={Style.input}
              checked={clickedOption === index + 1}
              readOnly
            />
            <span
              className={Style.answers}
              onClick={() => handleOptionClick(index)}
            >
              {answer}
            </span>
          </label>
        ))}

        <div className={Style.inputBtnContainer}>
          <input
            type="button"
            value="Geri"
            className={Style.inputPrevBtn}
            onClick={previousQuestion}
          />

          <input
            type="button"
            value="Növbəti"
            className={Style.inputBtn}
            onClick={nextQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
