import React from "react";
import "../productDetailComponent/ProductDetail.css";
import { useStateValue } from "../../_service/StateProvider";
import FeatureSupportBlock from "../common/SupportFeatureBlock";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../../_util/resources";
import { useFetch } from "../../_api/ProductService";
import ProductHolder from "../ProductComponent/ProductHolder";
import Skeleton from "react-loading-skeleton";
const ProductDetail = () => {
  const { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();

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

  const [response, loading, error] = useFetch(PRODUCT_URL, id);
  const product = (response && response.data) || {};
  const images = [product.image, product.image, product.image, product.image];
  return (
    <>
      {" "}
      <section class="section-name bg padding-y-sm">
        <div class="container">
          <div class="card">
            <div class="row no-gutters">
              <aside class="col-md-6">
                <article class="gallery-wrap">
                  <div class="img-big-wrap">
                    {product.image ? (
                      <a href="#">
                        <img src={product.image} />
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
                        <a href="#" class="item-thumb">
                          <img src={img} />
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
        </div>
      </section>
      <ProductHolder title="Vus récement" secondTitle="Voir plus" />
      <FeatureSupportBlock />
    </>
  );
};

export default ProductDetail;
