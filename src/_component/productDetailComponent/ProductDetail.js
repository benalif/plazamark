import React, { useEffect, useState, useCallback } from "react";
import "../productDetailComponent/ProductDetail.css";
import { useStateValue } from "../../_service/StateProvider";
import FeatureSupportBlock from "../common/SupportFeatureBlock";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../../_util/resources";
import { useFetch } from "../../_api/ProductService";
import ProductHolder from "../ProductComponent/ProductHolder";
import Skeleton from "react-loading-skeleton";
import Review from "./Review";
import ProductModal from "../productDetailComponent/ProductModal";
import Product from "../ProductComponent/Product";
const ProductDetail = () => {
  const { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();
  const [image, setImage] = useState(null);

  const addToBasket = (id, title, image, price, rating) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const [response, loading, error] = useFetch(PRODUCT_URL, id, image);
  const product = (response && response.data) || {};
  const images = [
    product.image,
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    product.image,
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  ];

  return (
    <>
      <ProductModal product={product} />
      <section class="section-name bg padding-y-sm">
        <div class="container">
          <div class="card">
            <div class="row no-gutters">
              <aside class="col-md-6">
                <article class="gallery-wrap">
                  <div
                    class="img-big-wrap"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    {!loading ? (
                      <a>
                        <img src={image || product.image} />
                      </a>
                    ) : (
                      <Skeleton
                        style={{
                          marginBottom: "10px",
                          borderRadius: "0.37rem",
                          height: "400px",
                        }}
                      />
                    )}
                  </div>

                  <div class="thumbs-wrap">
                    {images.map((img) =>
                      product.image ? (
                        <a
                          class="item-thumb"
                          onClick={() => {
                            console.log("image" + img);
                            setImage(img);
                          }}
                        >
                          <img src={img} style={{ cursor: "pointer" }} />
                        </a>
                      ) : (
                        <Skeleton
                          style={{
                            width: "60px",
                            height: " 60px",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            margin: "3px",
                            display: "inline-block",
                            overflow: "hidden",
                          }}
                        />
                      )
                    )}
                  </div>
                </article>
              </aside>
              <main class="col-md-6 border-left">
                <article class="content-body">
                  <h2 class="title">{product.title || <Skeleton />}</h2>

                  <div class="rating-wrap my-3">
                    <ul class="rating-stars">
                      <li style={{ width: "80%" }} class="stars-active">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/icons/stars-active.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="bootstrap-ecommerce-html/images/icons/starts-disable.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                    <small class="label-rating text-muted">132 reviews</small>
                    <small class="label-rating text-success">
                      <i class="fa fa-clipboard-check"></i> 154 orders
                    </small>
                  </div>

                  <div class="mb-3">
                    {product.price ? (
                      <>
                        <var class="price h4">{product.price}</var>
                        <span class="text-muted">/per kg</span>
                      </>
                    ) : (
                      <Skeleton width="80px" />
                    )}
                  </div>

                  <p>{product.description || <Skeleton count={5} />}</p>

                  <dl class="row">
                    <dt class="col-sm-3">Model#</dt>
                    <dd class="col-sm-9">Odsy-1000</dd>

                    <dt class="col-sm-3">Color</dt>
                    <dd class="col-sm-9">Brown</dd>

                    <dt class="col-sm-3">Delivery</dt>
                    <dd class="col-sm-9">Russia, USA, and Europe </dd>
                  </dl>

                  <hr />
                  <div class="row">
                    <div class="form-group col-md flex-grow-0">
                      <label>Quantity</label>
                      <div class="input-group mb-3 input-spinner">
                        <div class="input-group-prepend">
                          <button
                            class="btn btn-light"
                            type="button"
                            id="button-plus"
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <input type="text" class="form-control" value="1" />
                        <div class="input-group-append">
                          <button
                            class="btn btn-light"
                            type="button"
                            id="button-minus"
                          >
                            {" "}
                            −{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md">
                      <label>Select size</label>
                      <div class="mt-2">
                        <label class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            checked=""
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Small</div>
                        </label>

                        <label class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Medium</div>
                        </label>

                        <label class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            name="select_size"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Large</div>
                        </label>
                      </div>
                    </div>
                  </div>
                  {!loading ? (
                    <a href="#" class="btn  btn-primary">
                      Buy now
                    </a>
                  ) : (
                    <Skeleton width="5rem" height="2rem" />
                  )}
                  {!loading ? (
                    <>
                      <a
                        style={{ marginLeft: "5px" }}
                        class="btn  btn-outline-primary"
                        onClick={() =>
                          addToBasket(
                            product.id,
                            product.title,
                            product.image,
                            product.price,
                            null
                          )
                        }
                      >
                        <span class="text">Add to cart</span>
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </a>
                    </>
                  ) : (
                    <Skeleton width="6rem" height="2rem" />
                  )}
                </article>
              </main>
            </div>
          </div>
          <article class="card" style={{ marginTop: "20px" }}>
            <div class="card-body">
              <div class="row">
                <aside class="col-md-6">
                  <h5>Parameters</h5>
                  <dl class="row">
                    <dt class="col-sm-3">Display</dt>
                    <dd class="col-sm-9">
                      13.3-inch LED-backlit display with IPS
                    </dd>

                    <dt class="col-sm-3">Processor</dt>
                    <dd class="col-sm-9">2.3GHz dual-core Intel Core i5</dd>

                    <dt class="col-sm-3">Camera</dt>
                    <dd class="col-sm-9">720p FaceTime HD camera</dd>

                    <dt class="col-sm-3">Memory</dt>
                    <dd class="col-sm-9">8 GB RAM or 16 GB RAM</dd>

                    <dt class="col-sm-3">Graphics</dt>
                    <dd class="col-sm-9">Intel Iris Plus Graphics 640</dd>
                  </dl>
                </aside>
                <aside class="col-md-6">
                  <h5>Features</h5>
                  <ul class="list-check">
                    <li>Best performance of battery</li>
                    <li>5 years warranty for this product</li>
                    <li>Amazing features and high quality</li>
                    <li>Best performance of battery</li>
                    <li>5 years warranty for this product</li>
                  </ul>
                </aside>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </article>
        </div>
      </section>
      <Review />
      <ProductHolder title="Articles similaires" secondTitle="Voir plus" />
      <ProductHolder title="Vus récement" secondTitle="Voir plus" />
      <FeatureSupportBlock />
    </>
  );
};

export default ProductDetail;
