import React from "react";

const convert = (text) => {
  const span = document.createElement("span");

  return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
    span.innerHTML = entity;
    return span.innerText;
  });
};

export const Question = (props) => {
  return (
    <div className="about">
      <div className="category">{props.trivia[props.current - 1].category}</div>
      <div className="question">
        <div className="number">{props.current}</div>
        {convert(props.trivia[props.current - 1].question)}
      </div>
    </div>
  );
};

const Options = (props) => {
  return (
    <div className="options">
      {[
        props.trivia[props.current - 1].correct_answer,
        ...props.trivia[props.current - 1].incorrect_answers,
      ]
        .sort((a, b) => 0.5 - Math.random())
        .map((options, index) => (
          <div
            className={
              props.trivia[props.current - 1].correct_answer === options
                ? "correct"
                : "incorrect"
            }
            onClick={() => {
              if (options === props.trivia[props.current - 1].correct_answer) {
                props.handleScore(props.score + 1);
              }
              props.increment(props.current + 1);
            }}
            key={index}
          >
            {convert(options)}
          </div>
        ))}
    </div>
  );
};

export default Options;
