import type { Quiz } from "../App";
import { Button } from "./Buttons";
import "./ResultCard.scss";

interface Props {
  title: string;
  icon: string;
  points: number;
  max: number;
  callback: (quiz: Quiz | undefined | null) => void;
}

const ResultCard = (props: Props) => (
  <section className="result-section">
    <h1>
      <span>Quiz compleated</span>You scored...
    </h1>
    <article className="result-card">
      <header>
        <img src={props.icon} alt="icon" />
        <h2>{props.title}</h2>
      </header>
      <h3>{props.points}</h3>
      <p>out of {props.max}</p>
    </article>
    <Button onClick={() => props.callback(null)}>Play Again</Button>
  </section>
);

export default ResultCard;
