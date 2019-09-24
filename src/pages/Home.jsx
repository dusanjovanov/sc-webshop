import React from "react";
import classes from "./css/Home.module.css";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="page">
      <h1 className={classes.title}>All products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
