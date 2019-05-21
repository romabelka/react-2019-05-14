import React, { PureComponent } from "react";
import { Rate } from "antd";

class AverageRating extends PureComponent {
  state = {
    value: 0
  };

  render() {
    return <Rate defaultValue={this.state.value} disabled />;
  }

  static getDerivedStateFromProps(props, state) {
    const { reviews } = props;
    const rawRating =
      reviews.reduce((acc, { rating }) => {
        return acc + rating;
      }, 0) / reviews.length;
    return {
      value: Math.floor(rawRating * 2) / 2
    };
  }
}

export default AverageRating;
