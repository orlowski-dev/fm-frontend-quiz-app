import React, { LegacyRef, forwardRef } from "react";
import "./QuizOption.scss";

interface Props {
  qId: number;
  textContent: string;
}

const QuizOption = forwardRef(
  (
    props: React.HTMLAttributes<HTMLInputElement> & Props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const { qId, textContent, ...other } = props;
    return (
      <div className="quiz-option">
        <input
          type="radio"
          {...other}
          name="answer"
          id={`answer-${qId}`}
          ref={ref}
          value={textContent}
        />
        <label htmlFor={`answer-${qId}`}>{textContent}</label>
        <div className="letter">{String.fromCharCode(65 + qId)}</div>
      </div>
    );
  }
);

export default QuizOption;
