export default function dropdown(props) {
  let setFun = (e) => {
    props.setTo(e.target.value);
  };
  return (
    <div>
      <select name="to" id="to" onChange={setFun}>
        <option value="select">Select</option>
        <option value="celcius">Celcius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
    </div>
  );
}
