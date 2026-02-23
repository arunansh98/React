import { useContext } from "react";
import { CounterContext } from "../App";

export default function CounterUsingContext() {
  const { count, incrementCount, decrementCount } = useContext(CounterContext);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={incrementCount}>Increment by 1</button>
      <button
        onClick={decrementCount}
        style={{
          marginLeft: "1rem",
        }}
      >
        Decrement by 1
      </button>
    </div>
  );
}
