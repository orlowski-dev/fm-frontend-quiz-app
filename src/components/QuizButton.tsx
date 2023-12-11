import React from "react";
import "./QuizButton.scss";

interface Props {
  textContent: string;
  icon?: string;
}

const QuizButton = (props: React.HTMLAttributes<HTMLButtonElement> & Props) => {
  const { textContent, icon, ...other } = props;
  return (
    <button {...other} className="quiz-button">
      {icon && <img src={icon} alt="icon" />}
      {textContent}
    </button>
  );
};

export default QuizButton;
