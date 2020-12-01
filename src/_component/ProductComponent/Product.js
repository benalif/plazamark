import React from "react";
import { Link } from "react-router-dom";
import "../ProductComponent/Product.css";
import { useStateValue } from "../../_service/StateProvider";
import "../../sass/ui-assets/components/cards-product.scss";

const Product = ({ product }) => {
  const { id, title, image, price, rating } = product;
  const [{ basket }, dispatch] = useStateValue();

  function addToBasket() {
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
  }
  return (
    <>
      <div class="col-md-3">
        <Link to={`/product/${id}`}>
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap">
              {" "}
              <img src={image} />{" "}
            </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">
                {title}
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
              <div class="price mt-1">{price}</div>
            </figcaption>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Product;
