import React, { useState } from "react";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div>
      <span>{props.name}</span>
      <span style={{ float: "right" }}>{props.price}</span>
      <hr />
      <span>{amount}</span>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

function useCounter(initialValue) {
  const [value, setAmount] = useState(initialValue);
  return [
    value,
    () => setAmount(value <= 0 ? 0 : value - 1),
    () => setAmount(value + 1)
  ];
}

export default Dish;
