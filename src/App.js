import { useState, useEffect } from "react";
import "./App.css";
import TriviaBody from "./components/TriviaBody";
import Header from "./components/Header";

function App() {
  const intro = {
    category: "Personal",
    type: "multiple",
    difficulty: "Easy",
    question: "How are you doing today?",
    correct_answer: "Great",
    incorrect_answers: ["Terrible", "Sad", "Depressed"],
  };

  const [trivia, setTrivia] = useState([intro]);
  const [current, setCurrent] = useState(1);
  const [score, setScore] = useState(0);

  const makeRequests = async () => {
    const URL = "https://opentdb.com/api.php?amount=10&type=multiple";

    const response = await fetch(URL);
    const JSONFormat = await response.json();

    setTrivia([intro, ...JSONFormat.results]);
    console.log(JSONFormat.results);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    makeRequests();
  }, []);

  return (
    <div className="container">
      <Header />
      <TriviaBody
        trivia={trivia}
        current={current}
        increment={setCurrent}
        score={score}
        handleScore={setScore}
      />
    </div>
  );
}

export default App;
