import React from "react";
import "./styles.css";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <div className="App">
      <h1>
        <input type="number" disabled value={count} className="input" />
      </h1>
      <div>
        <button className="btn incrementBtn" onClick={increment}>
          +
        </button>
        <button className="btn decrementBtn" onClick={decrement}>
          -
        </button>
      </div>
      <div>
        <button className="btn resetBtn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const store = createStore(reducer);
