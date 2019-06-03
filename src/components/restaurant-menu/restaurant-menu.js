import React from "react";
import Dish from "../dish";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

function RestaurantMenu(props) {
  return (
    <div data-automation-id="menu" className="restaurant-menu">
      <Row gutter={16}>
        {props.menu.map(dishId => (
          <Col key={dishId} span={8}>
            <Dish id={dishId} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

RestaurantMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default RestaurantMenu;
