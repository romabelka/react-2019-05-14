import React, { PureComponent } from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createRatingSelector } from "../../selectors";

class AverageRating extends PureComponent {
  render() {
    const { rating } = this.props;
    return <Rate value={rating} disabled allowHalf />;
  }
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const initMapStateToProps = () => {
  const ratingSelector = createRatingSelector();
  return (state, ownProps) => {
    return {
      rating: ratingSelector(state, ownProps)
    };
  };
};

export default connect(initMapStateToProps)(AverageRating);
