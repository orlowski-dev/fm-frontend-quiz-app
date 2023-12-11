import { useCallback, useState } from "react";
import HelloSection from "./components/HelloSection";
import AppHeader from "./components/AppHeader";
import "./App.css";
import Game from "./components/Game";

export interface Quiz {
  title: string;
  icon: string;
  questions: { question: string; answer: string; options: string[] }[];
}

const App = () => {
  const [quiz, setQuiz] = useState<null | undefined | Quiz>(null);

  const setQuizCallback = useCallback((quiz: Quiz | undefined | null) => {
    setQuiz(quiz);
  }, []);

  return (
    <>
      <AppHeader quiz={quiz} />
      <main>
        {!quiz && <HelloSection callback={setQuizCallback} />}
        {quiz && <Game quiz={quiz} callback={setQuizCallback} />}
      </main>
    </>
  );
};

export default App;
