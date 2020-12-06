import React, { useState, useEffect } from "react";
import "./productHolder.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { PRODUCT_URL, BASE_URL } from "../../_util/resources";
import Skeleton from "react-loading-skeleton";

const ProductHolder = ({ title, secondTitle }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams;

  //get products
  useEffect(() => {
    setLoading(true);
    setProducts([]);
    setError(null);

    Axios.get(BASE_URL + `/products?limit=4`)
      .then((response) => {
        setLoading(false);
        setError(null);
        setProducts(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("error");
      });
  }, []);

  return (
    <>
      {loading ? (
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
            {[4, 4, 4, 4].map(() => (
              <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                  <a href="#" class="img-wrap">
                    <Skeleton height="20rem" />
                  </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">
                      <Skeleton count="3" />
                    </a>

                    <div class="rating-wrap">
                      <Skeleton
                        width="10rem
                      "
                      />
                    </div>
                    <div class="price mt-1">
                      <Skeleton width="5rem" />
                    </div>
                  </figcaption>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
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
              <Product product={product} />
            ))}
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default ProductHolder;
