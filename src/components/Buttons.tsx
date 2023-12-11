import React from "react";
import "./Buttons.scss";

interface QuizButtonProps {
  textContent: string;
  icon?: string;
}

export const QuizButton = (
  props: React.HTMLAttributes<HTMLButtonElement> & QuizButtonProps
) => {
  const { textContent, icon, ...other } = props;
  return (
    <button {...other} className="quiz-button">
      {icon && <img src={icon} alt="icon" />}
      {textContent}
    </button>
  );
};

export const Button = (
  props: React.HTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
) => {
  const { children, ...other } = props;
  return (
    <button className="button" {...other}>
      {children}
    </button>
  );
};
