import React, { useRef, useState } from "react";
import "./Options.scss";
import QuizOption from "./QuizOption";
import { Button } from "./Buttons";

const getFormInputs = (form: React.RefObject<HTMLFormElement>) => {
  if (!form.current) return [];
  return Array.from(form.current.elements);
};

const clearInputs = (form: React.RefObject<HTMLFormElement>) => {
  if (!form.current) return [];
  const inputs = getFormInputs(form);
  inputs.forEach((input) => input.classList.remove("wrong"));
  inputs.forEach((input) => input.classList.remove("correct"));
};

const highlightAnswers = (
  form: React.RefObject<HTMLFormElement>,
  selectedId: number,
  correctId: number
) => {
  if (!form.current) return;
  const inputs = getFormInputs(form);

  if (selectedId !== correctId) {
    inputs
      .find((inp) => inp.id === `answer-${selectedId}`)
      ?.classList.add("wrong");
    inputs
      .find((inp) => inp.id === `answer-${correctId}`)
      ?.classList.add("correct");
  } else {
    inputs
      .find((inp) => inp.id === `answer-${selectedId}`)
      ?.classList.add("correct");
  }
};

const Options = ({
  options,
  answer,
  nextQuestionCallback,
}: {
  options: string[];
  answer: string;
  nextQuestionCallback: (addPoint?: boolean) => void;
}) => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const correctID = options.findIndex((option) => option === answer) as number;

  const formRef = useRef<HTMLFormElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedID === null) {
      console.error("no selected id");
      return;
    }

    if (nextQuestion && selectedID !== null) {
      nextQuestionCallback(selectedID === correctID);
      setNextQuestion(false);
      setDisabled(false);
      setSelectedID(null);
      clearInputs(formRef);
      formRef.current!.reset();
    }

    if (!nextQuestion) {
      highlightAnswers(formRef, selectedID, correctID);
      setNextQuestion(true);
      setDisabled(true);
    }
  };

  return (
    <form onSubmit={onFormSubmit} ref={formRef} className="form-options">
      {options.map((elem, index: number) => (
        <QuizOption
          textContent={elem}
          key={index}
          qId={index}
          onClick={() => {
            setSelectedID(options.findIndex((option) => option === elem));
          }}
          disabled={disabled}
        />
      ))}
      <Button>{nextQuestion ? "Next question" : "Submit answer"}</Button>
    </form>
  );
};

export default Options;
