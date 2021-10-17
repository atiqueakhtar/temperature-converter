export default function input(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="enter temperature.."
        value={props.input}
        onChange={function (e) {
          props.setInput(e.target.value);
        }}
      />
    </div>
  );
}
