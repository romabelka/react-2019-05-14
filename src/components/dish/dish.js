import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import "./dish.css";
import { connect } from "react-redux";
import { increaseCart, decreaseCart } from "../../ac";

function Dish(props) {
  const { id, amount, increase, decrease } = props;
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span className="dish-price">{amount}</span>
          <Button.Group>
            <Button
              onClick={() => decrease(id)}
              type="primary"
              shape="circle"
              icon="minus"
            />
            <Button
              onClick={() => increase(id)}
              type="primary"
              shape="circle"
              icon="plus"
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

export default connect(
  (state, ownProps) => ({
    amount: state.cart[ownProps.id] || 0
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart
  }
)(Dish);
