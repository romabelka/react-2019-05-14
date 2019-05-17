import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";

function App(props) {
  return (
    <div className="App">
      <RestaurantList restaurants={props.restaurants} />
      <UserForm />
    </div>
  );
}

export default App;
