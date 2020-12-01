import React from "react";
import "./productHolder.css";
import Product from "./Product";

const ProductHolder = ({ title, secondTitle, products }) => {
  console.log(title);
  return (
    <>
      <div class="container">
        <header class="section-heading">
          <a href="#" class="btn btn-outline-primary float-right">
            {secondTitle}
          </a>
          <h3 class="section-title">{title}</h3>
        </header>

        <div class="row">
          {products.map((product) => (
            <Product />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductHolder;
