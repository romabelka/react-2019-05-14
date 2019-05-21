// HOC - higher order component
import React, { Component } from "react";

const toggleVisibility = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleVisibility={this.toggleVisibility}
        />
      );
    }

    toggleVisibility = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  };

export { toggleVisibility };
