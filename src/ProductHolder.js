import React from "react";
import "./productHolder.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

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
            <div class="col-md-3">
              <Link to={`/product/${product.props.id}`}>
                <div href="#" class="card card-product-grid">
                  <a href="#" class="img-wrap">
                    {" "}
                    <img src={product.props.image} />{" "}
                  </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">
                      Just another product name
                    </a>

                    <div class="rating-wrap">
                      <ul class="rating-stars">
                        <li style={{ width: "80%" }} class="stars-active">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <span class="label-rating text-muted"> 34 reviws</span>
                    </div>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductHolder;
