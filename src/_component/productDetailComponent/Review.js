import React from "react";
import { COMMENTS } from "../../_util/resources";
const Review = ({ id }) => {
  return (
    <section class="section-content padding-y bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <header class="section-heading d-flex justify-content-between">
              <div>
                <h3>Review components </h3>
                <div class="rating-wrap">
                  <ul class="rating-stars stars-lg">
                    <li style={{ width: "80%" }} class="stars-active">
                      <img
                        src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/icons/stars-active.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/icons/starts-disable.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                  <strong class="label-rating text-lg">
                    {" "}
                    4.5 <span class="text-muted">| 112 reviews</span>
                  </strong>
                </div>
              </div>
              <div>
                <a
                  class="btn btn-outline-primary float-right"
                  href={`/product/comment/${id}`}
                >
                  Voir plus
                </a>
              </div>
            </header>

            {COMMENTS.map((comment) => (
              <article class="box mb-3">
                <div class="icontext w-100">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/avatars/avatar1.jpg"
                    class="img-xs icon rounded-circle"
                  />
                  <div class="text">
                    <span class="date text-muted float-md-right">
                      {comment.date}
                    </span>
                    <h6 class="mb-1">{comment.user}</h6>
                    <ul class="rating-stars">
                      <li style={{ width: "80%" }} class="stars-active">
                        <img src={comment.rating} alt="" />
                      </li>
                      <li>
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/icons/starts-disable.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                    <span class="label-rating text-warning">
                      {comment.mention}
                    </span>
                  </div>
                </div>
                <div class="mt-3">
                  <p>{comment.comment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
