import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import "./dish.css";
import { connect } from "react-redux";
import { increaseCart, decreaseCart } from "../../ac";
import Price from "../price";
import { createDishSelector } from "../../selectors";

function Dish(props) {
  const { id, amount, increase, decrease, price } = props;
  return (
    <Card
      bordered
      actions={[
        <Price value={price} />,
        <>
          <span className="dish-amount">{amount}</span>
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
  id: PropTypes.string.isRequired,

  // from connect
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

const initMapStateToProps = () => {
  const dishSelector = createDishSelector();

  return (state, ownProps) => {
    return {
      amount: state.cart[ownProps.id] || 0,
      ...dishSelector(state, ownProps)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    increase: increaseCart,
    decrease: decreaseCart
  }
)(Dish);
