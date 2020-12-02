import React from "react";
import "./productHolder.css";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductHolder = ({ title, secondTitle, products }) => {
  products.map((product) => {
    console.log(product.props);
  });
  return (
    <>
      <div class="container">
        <header class="section-heading">
          <Link
            to="/products/category/jewelery"
            class="btn btn-outline-primary float-right"
          >
            {secondTitle}
          </Link>
          <h3 class="section-title">{title}</h3>
        </header>

        <div class="row">
          {products.map((product) => (
            <Product product={product.props} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductHolder;
