import React, { useRef, useState } from "react";
import "./Options.scss";
import QuizOption from "./QuizOption";
import { Button } from "./Buttons";

const Options = ({
  options,
  callback,
}: {
  options: string[];
  callback: (selectedOption: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;
    callback(selectedOption);
    formRef.current?.reset();
    setSelectedOption(null);
  };

  return (
    <form onSubmit={onFormSubmit} ref={formRef} className="form-options">
      {options.map((elem, index: number) => (
        <QuizOption
          textContent={elem}
          key={index}
          qId={index}
          onClick={(e: React.SyntheticEvent<HTMLInputElement>) =>
            setSelectedOption(e.currentTarget.value)
          }
        />
      ))}
      <Button>Submit answer</Button>
    </form>
  );
};

export default Options;
