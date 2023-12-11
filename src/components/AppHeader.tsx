import type { Quiz } from "../App";
import "./AppHeader.scss";
import DarkModeToggler from "./DarkModeToggler";

interface Props {
  quiz: Quiz | undefined | null;
}

const AppHeader = (props: Props) => {
  return (
    <header className="app-header container">
      <div className="subject">
        {props.quiz?.title && (
          <>
            <img src={props.quiz.icon} alt="icon" />
            <p>{props.quiz.title}</p>
          </>
        )}
      </div>
      <DarkModeToggler />
    </header>
  );
};

export default AppHeader;
