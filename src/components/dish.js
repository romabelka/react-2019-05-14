import React, { useState } from "react";
import Button from "antd/lib/button";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div>
      <span>{props.name}</span>
      <span style={{ float: "right" }}>{props.price}</span>
      <hr />
      <span>{amount}</span>
      <Button onClick={decrease} type="primary" shape="circle" icon="minus" />
      <Button onClick={increase} type="primary" shape="circle" icon="plus" />
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
