import React from "react";
import PropTypes from "prop-types";
import { Badge, Button } from "antd";
import "./cart-badge.css";
import { connect } from "react-redux";
import { cartAmountSelector } from "../../selectors";

function CartBadge(props) {
  return (
    <Badge count={props.amount}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
      />
    </Badge>
  );
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired
};

export default connect(state => ({
  amount: cartAmountSelector(state)
}))(CartBadge);
