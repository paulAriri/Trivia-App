import React from "react";
import Options, { Question } from "./Options";

const TriviaBody = (props) => {
  return (
    <>
      {props.current <= 9 ? (
        <div className="quiz-body">
          <Question trivia={props.trivia} current={props.current} />
          <Options
            trivia={props.trivia}
            current={props.current}
            increment={props.increment}
            score={props.score}
            handleScore={props.handleScore}
          />
        </div>
      ) : (
        <div className="quiz-body">
          <div className="score">You got {props.score}/10</div>
          <button onClick={() => window.location.reload()} className="reload">
            Play Again!
          </button>
        </div>
      )}
    </>
  );
};

export default TriviaBody;
