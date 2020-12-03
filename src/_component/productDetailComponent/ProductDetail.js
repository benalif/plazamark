import React from "react";
import "../productDetailComponent/ProductDetail.css";
import { useStateValue } from "../../_service/StateProvider";
import FeatureSupportBlock from "../common/SupportFeatureBlock";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../../_util/resources";
import { useFetch } from "../../_api/ProductService";

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

  const [response, loading, error] = useFetch(PRODUCT_URL + "/" + id);
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
                    <a href="#">
                      <img src={product.image} />
                    </a>
                  </div>
                  <div class="thumbs-wrap">
                    {images.map((img) => (
                      <a href="#" class="item-thumb">
                        {" "}
                        <img src={img} />
                      </a>
                    ))}
                  </div>
                </article>
              </aside>
              <main class="col-md-6 border-left">
                <article class="content-body">
                  <h2 class="title">{product.title}</h2>

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
                      {" "}
                      <i class="fa fa-clipboard-check"></i> 154 orders{" "}
                    </small>
                  </div>

                  <div class="mb-3">
                    <var class="price h4">${product.price}</var>
                    <span class="text-muted">/per kg</span>
                  </div>

                  <p>
                    Virgil Abloh’s Off-White is a streetwear-inspired collection
                    that continues to break away from the conventions of
                    mainstream fashion. Made in Italy, these black and brown
                    Odsy-1000 low-top sneakers.
                  </p>

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
                  <a href="#" class="btn  btn-primary">
                    Buy now
                  </a>
                  <a
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
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </article>
              </main>
            </div>
          </div>
        </div>
      </section>
      <FeatureSupportBlock />
    </>
  );
};

export default ProductDetail;
