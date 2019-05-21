import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import RestaurantsMap from "./components/restaurants-map";
import { Layout } from "antd";
const { Header, Content } = Layout;

function App(props) {
  return (
    <Layout className="App">
      <Header />
      <Content>
        <RestaurantList restaurants={props.restaurants} />
        {/* temporary turn Map off */}
        {false && <RestaurantsMap restaurants={props.restaurants} />}
        <UserForm />
      </Content>
    </Layout>
  );
}

export default App;
