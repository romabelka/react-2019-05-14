import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { increase, decrease } from "../../ac";

class Counter extends Component {
  render() {
    console.log("Counter");
    return (
      <div>
        <span style={{ color: "black" }}>{this.props.countFromStore}</span>
        <Button.Group>
          <Button onClick={this.decrease} type="primary" icon="minus" />
          <Button onClick={this.increase} type="primary" icon="plus" />
        </Button.Group>
      </div>
    );
  }
  decrease = () => {
    this.props.decreaseFromStore();
  };
  increase = () => {
    this.props.increaseFromStore();
  };
}

const mapStateToProps = state => ({
  countFromStore: state.count
});

const mapDispatchToProps = {
  increaseFromStore: increase,
  decreaseFromStore: decrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
