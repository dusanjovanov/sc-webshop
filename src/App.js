import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:name" component={Product} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
