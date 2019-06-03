import React, { Component } from "react";
import { Button, List } from "antd";
import { connect } from "react-redux";
import { increaseCart, decreaseCart, deleteFromCart } from "../../ac";
import "./order-list.css";
import Price from "../price";
import { selectAllDishesAndTotalPrice } from "../../selectors";

class OrderList extends Component {
  render() {
    const {
      dishes,
      totalPrice,
      increaseCart,
      decreaseCart,
      deleteFromCart
    } = this.props;
    if (dishes.length === 0) {
      return null;
    }
    return (
      <div className="order">
        <h3>Your order</h3>
        <List>
          {dishes.map(dish => (
            <List.Item
              key={dish.id}
              className="order-item"
              actions={[
                <>
                  {`${dish.amount}x`}
                  <Price className="dish-amount" value={dish.price} />
                  .....
                  <Price
                    className="dish-amount"
                    value={dish.totalDishPrice}
                  />{" "}
                  <Button.Group>
                    <Button
                      onClick={() => decreaseCart(dish.id)}
                      type="primary"
                      shape="circle"
                      icon="minus"
                    />
                    <Button
                      onClick={() => increaseCart(dish.id)}
                      type="primary"
                      shape="circle"
                      icon="plus"
                    />
                  </Button.Group>
                </>,
                <Button
                  onClick={() => deleteFromCart(dish.id)}
                  type="danger"
                  icon="delete"
                  shape="circle"
                />
              ]}
            >
              {dish.name}
            </List.Item>
          ))}
        </List>
        <h3>
          Total: <Price className="dish-amount" value={totalPrice} />
        </h3>
      </div>
    );
  }
}

export default connect(
  selectAllDishesAndTotalPrice,
  {
    increaseCart,
    decreaseCart,
    deleteFromCart
  }
)(OrderList);
