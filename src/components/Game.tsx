import { useCallback, useState } from "react";
import Progressbar from "./Progressbar";
import "./Game.scss";
import Options from "./Options";
import ResultCard from "./ResultCard";
import { Quiz } from "../App";

interface Props {
  quiz: Quiz;
  callback: (quiz: Quiz | undefined | null) => void;
}

const Max = 10;

const Game = (props: Props) => {
  const [qIndex, setQIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const question = props.quiz.questions[qIndex].question;
  const answer = props.quiz.questions[qIndex].answer;
  const options = props.quiz.questions[qIndex].options;
  const [gameFinised, setGameFinished] = useState(false);

  const nextQuestionCallback = useCallback(
    (addPoint?: boolean) => {
      if (addPoint) setPoints((prev) => prev + 1);

      if (qIndex < Max - 1) {
        setQIndex((prev) => prev + 1);
      } else {
        setGameFinished(true);
      }
    },
    [qIndex]
  );

  return (
    <section className="game-section container">
      {!gameFinised ? (
        <>
          <p>
            Question {qIndex + 1} of {Max}
          </p>
          <h2>{question}</h2>
          <Progressbar currentValue={qIndex + 1} max={Max} />
          <Options
            options={options}
            answer={answer}
            // callback={formSubmitCallback}
            nextQuestionCallback={nextQuestionCallback}
          />
        </>
      ) : (
        <>
          <ResultCard
            title={props.quiz.title}
            icon={props.quiz.icon}
            points={points}
            max={Max}
            callback={props.callback}
          />
        </>
      )}
    </section>
  );
};

export default Game;
