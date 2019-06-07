import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
// import RestaurantsMap from "./components/restaurants-map";
import { Layout } from "antd";
import CartBadge from "./components/cart-badge";
// import Counter from "./components/counter";
import OrderList from "./components/order-list";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header className="header">
        <CartBadge />
      </Header>
      <Content>
        <RestaurantList />
        {/* temporary turn Map off */}
        {/*{<RestaurantsMap restaurants={props.restaurants} />}*/}
        <OrderList />
        <UserForm />
      </Content>
      <Footer>{/*<Counter />*/}</Footer>
    </Layout>
  );
}

export default App;
