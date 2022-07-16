import Button from "../Button";
import "./style.css";
import { useState, useEffect } from "react";
const Quize = (props) => {
  const [check, setcheck] = useState(null);

  const inputHandler = (e) => {
    const value = e.target.value;
    setcheck(value);
  };

  const onsubmit = () => {
    if (check) {
      let correct = props.quize.correct === check;
      props.onIndex(correct);
    }
  };

  useEffect(() => {
    setcheck(null);
  }, [props.quize.question]);

  return (
    <>
      <div className="quize">
        <h2>{props.quize.question}</h2>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="a"
                readOnly
                checked={check === "a"}
                onClick={inputHandler}
              />
              <span>{props.quize.a}</span>
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="b"
                readOnly
                checked={check === "b"}
                onClick={inputHandler}
              />
              <span>{props.quize.b}</span>
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="c"
                readOnly
                checked={check === "c"}
                onClick={inputHandler}
              />
              <span>{props.quize.c}</span>
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="d"
                readOnly
                checked={check === "d"}
                onClick={inputHandler}
              />
              <span>{props.quize.d}</span>
            </label>
          </li>
        </ul>
      </div>
      <Button onClick={onsubmit} />
    </>
  );
};

export default Quize;
