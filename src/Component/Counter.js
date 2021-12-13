import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/Actions";
import { Button } from "react-bootstrap";

const Counter = (props) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const n = 2;
  return (
    <div>
      <Button variant="dark" onClick={() => dispatch(increment(n))}>
        increment
      </Button>
      <h2>{count}</h2>
      <Button variant="dark" onClick={() => dispatch(decrement(n))}>
        decrement
      </Button>
    </div>
  );
};
export default Counter;
