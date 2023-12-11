import { useCallback, useState } from "react";
import Progressbar from "./Progressbar";
import "./Game.scss";
import Options from "./Options";

interface Props {
  questions: { question: string; answer: string; options: string[] }[];
}

const Max = 10;

const Game = ({ questions }: Props) => {
  const [qIndex, setQIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const question = questions[qIndex].question;
  const answer = questions[qIndex].answer;
  const [gameFinised, setGameFinished] = useState(false);

  const formSubmitCallback = useCallback(
    (selectedOption: string) => {
      if (selectedOption === answer) {
        setPoints((prev) => prev + 1);
      }

      if (qIndex < Max - 1) {
        setQIndex((prev) => prev + 1);
      } else {
        setGameFinished(true);
      }
    },
    [answer, qIndex]
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
            options={questions[qIndex].options}
            callback={formSubmitCallback}
          />
        </>
      ) : undefined}
    </section>
  );
};

export default Game;
