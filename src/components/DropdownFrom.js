export default function dropdown(props) {
  let setFun = (e) => {
    props.setFrom(e.target.value);
  };
  return (
    <div>
      <select name="from" id="from" onChange={setFun}>
        <option value="select">Select</option>
        <option value="celcius">Celcius</option>
        <option value="fahrenheit">fahrenheit</option>
      </select>
    </div>
  );
}
