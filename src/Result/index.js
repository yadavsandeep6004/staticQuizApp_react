import Button from "../Button";
const Result = (props) => {
  const ans = {
    padding: "4rem 1rem"
  };
  return (
    <>
      <h2 style={ans}>Correct Answer : {props.answer}</h2>
      <Button onClick={props.onClick}>Reset</Button>
    </>
  );
};

export default Result;
