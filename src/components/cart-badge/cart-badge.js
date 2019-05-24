import React from "react";
import PropTypes from "prop-types";
import { Badge, Button } from "antd";
import "./cart-badge.css";
import { connect } from "react-redux";

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
  amount: Object.values(state.cart).reduce((total, dishes) => total + dishes, 0)
}))(CartBadge);
