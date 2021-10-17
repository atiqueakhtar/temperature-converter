import DropdownFrom from "./components/DropdownFrom";
import DropdownTo from "./components/DropdownTo";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
import "./styles.css";
import { useState } from "react";

export default function App() {
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [result, setResult] = useState("");
  let [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>Temperature Converter:</h1>
      <label>From:</label>
      <DropdownFrom setFrom={setFrom} />
      <Input input={input} setInput={setInput} />
      <label>To:</label>
      <DropdownTo setTo={setTo} />
      <Button
        from={from}
        to={to}
        setResult={setResult}
        input={input}
        setInput={setInput}
      />
      <Result result={result} />
    </div>
  );
}
