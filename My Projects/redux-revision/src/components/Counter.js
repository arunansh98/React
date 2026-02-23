import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment by 1</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{
          marginLeft: "1rem",
        }}
      >
        Decrement by 1
      </button>
    </div>
  );
}
