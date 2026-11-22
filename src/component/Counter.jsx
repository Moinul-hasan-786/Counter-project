import { useState } from "react";
import "./Counter.css";

function Counter(props) {
  const [count, setCount] = useState(props.counter);
  function minusHandler() {
    setCount(count - 1);
  }
  function plusHandler() {
    setCount(count + 1);
  }
  function ResetHandler() {
    setCount(0);
  }
  return (
    <div className="flex flex-col gap-y-5 items-center">
      <div className="bg-white  text-[#000] flex gap-x-[110px] rounded-md font-bold text-4xl px-7 py-3">
        <button className = "border-r-2 pr-4 border-[#bfbfbf]" onClick={minusHandler}>&minus;</button>
        <div className="text-5xl">{count}</div>
        <button className = "border-l-2 pl-4 border-[#bfbfbf]" onClick={plusHandler}>&#x2B;</button>
      </div>
      <button onClick = {ResetHandler} className="bg-[#0398d4] p-3 font-bold text-[#fff] ">Reset</button>
    </div>
  );
}

export default Counter;
