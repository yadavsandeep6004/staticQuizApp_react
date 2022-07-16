import "./styles.css";
import Quize from "./Quize";
import Result from "./Result";
import { QUIZ_DATA } from "./Data/index";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(0);

  const counterHandler = (correct) => {
    if (correct) {
      setAnswer((prev) => prev + 1);
    }

    setCount((prev) => prev + 1);
  };

  const resetHandler = () => {
    setCount(0);
    setAnswer(0);
  };

  return (
    <div className="App">
      {count < QUIZ_DATA.length ? (
        <Quize onIndex={counterHandler} quize={QUIZ_DATA[count]} />
      ) : (
        <Result onClick={resetHandler} answer={answer} />
      )}
    </div>
  );
}
