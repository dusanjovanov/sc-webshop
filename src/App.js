import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:name" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
