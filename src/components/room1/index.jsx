import "./index.scss";
import { questions } from "../../context/data";
import { useState } from "react";
import { Button } from "../btn.component";
import { getQuizResult } from "../../context/fetch.service";

export const Room1 = ({ room, action }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [activeAnswer, setActiveAnswer] = useState(0);

  const handleNextClick = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prevQuestion) => prevQuestion + 1);
      setAnswers((prevAnswers) => [...prevAnswers, activeAnswer]);
    } else {
      const result = getQuizResult(answers);
      action(result);
    }
  };

  const cancel = () => {
    action("cancel");
  };

  return (
    <div className="room1">
      <div className="room1__content">
        <h1 className="room1__title">{room.title}</h1>
        <div className="question-wrapper" key={questions[activeQuestion]?.id}>
          <h1>{questions[activeQuestion]?.question}</h1>
          <div className="answers">
            {questions[activeQuestion]?.answers?.map((answer, index) => (
              <div
                key={index}
                className={`answer ${activeAnswer === index && "active"}`}
                onClick={() => setActiveAnswer(index)}
              >
                <p>{answer}</p>
              </div>
            ))}
          </div>
          <div className="btns">
            <Button text={"GO HOME"} action={cancel} />
            <Button text={"NEXT"} action={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
