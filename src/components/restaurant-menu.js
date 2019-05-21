import React from "react";
import Dish from "./dish";
import { Row, Col } from "antd";

function RestaurantMenu(props) {
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={16}>
        {props.menu.map(dish => (
          <Col span={8}>
            <Dish key={dish.id} {...dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RestaurantMenu;
