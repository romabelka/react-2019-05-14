import React from "react";
import Dish from "./dish";
import { Row, Col } from "antd";

function RestaurantMenu(props) {
  return (
    <div data-automation-id="menu" style={{ padding: "16px" }}>
      <Row gutter={16}>
        {props.menu.map(dish => (
          <Col key={dish.id} span={8}>
            <Dish {...dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RestaurantMenu;
