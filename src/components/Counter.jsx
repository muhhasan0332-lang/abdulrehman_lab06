import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Redux Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
