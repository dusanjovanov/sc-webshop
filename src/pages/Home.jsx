import React from "react";
import classes from "./css/Home.module.css";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className={classes.root}>
      <ProductList />
    </div>
  );
};

export default Home;
