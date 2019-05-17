import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    return (
      <form>
        <input
          placeholder={"Name"}
          value={name}
          onChange={this.handleNameChange}
        />
        <br />
        <input
          type="tel"
          placeholder={"Phone Number"}
          value={phone}
          onChange={this.handlePhoneChange}
        />
        <br />
        <textarea
          placeholder={"Address"}
          value={address}
          onChange={this.handleAddressChange}
        />
        <br />
        <button type={"submit"} onClick={this.submit}>
          Send order
        </button>
      </form>
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      address: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

export default UserForm;
