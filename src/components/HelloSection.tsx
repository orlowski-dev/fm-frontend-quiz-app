import type { Quiz } from "../App";
import { default as data } from "../data.json";
import "./HelloSection.scss";
import QuizButton from "./QuizButton";

const Subjects = ["HTML", "CSS", "JavaScript", "Accessibility"];
const quizzes = data.quizzes;

interface Props {
  callback: (quiz: Quiz | undefined) => void;
}

const HelloSection = (props: Props) => {
  return (
    <section className="hello-section container">
      <h1>
        <span>Welcome to the</span> Frontend Quiz!
      </h1>
      <p>Pick a subject to get started.</p>

      <section className="subjects-section">
        {Subjects.map((subject, index: number) => {
          const q = quizzes.find((quiz) => quiz.title === subject);
          return (
            // <button key={index} onClick={() => props.callback(q)}>
            //   <img src={q?.icon} />
            //   {subject}
            // </button>
            <QuizButton
              key={index}
              textContent={subject}
              icon={q?.icon}
              onClick={() => props.callback(q)}
            />
          );
        })}
      </section>
    </section>
  );
};

export default HelloSection;
