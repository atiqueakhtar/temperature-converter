export default function button(props) {
  let clickHandler = () => {
    if (props.from === props.to) {
      props.setResult(props.input);
      props.setInput("");
    } else if (props.from === "celcius" && props.to === "fahrenheit") {
      let c = parseInt(props.input);
      let f = (9 / 5) * c + 32;
      props.setResult(f);
      props.setInput("");
    } else {
      let f = parseInt(props.input);
      let c = ((f - 32) * 5) / 9;
      props.setResult(c);
      props.setInput("");
    }
  };
  return (
    <div>
      <button onClick={clickHandler}>Calculate</button>
    </div>
  );
}
