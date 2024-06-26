import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileSCreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/search/:keyword" Component={HomeScreen} />
            <Route path="/page/:pageNumber" Component={HomeScreen} exact />
            <Route path="/search/:keyword/page/:pageNumber" Component={HomeScreen} exact />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileSCreen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeorder" Component={PlaceOrderScreen} />
            <Route path="/order/:id" Component={OrderScreen} />
            <Route path="/admin/userlist" Component={UserListScreen} />
            <Route path="/admin/user/:id/edit" Component={UserEditScreen} />
            <Route path="/admin/productList" Component={ProductListScreen} exact/>
            <Route path="/admin/productList/:pageNumber" Component={ProductListScreen} exact />
            <Route path="/admin/orderlist" Component={OrderListScreen} />
            <Route path="/admin/product/:id/edit" Component={ProductEditScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
