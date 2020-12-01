import React from "react";

const FeatureSupportBlock = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-4">
          <article class="card card-body">
            <figure class="itemside">
              <div class="aside">
                <span class="icon-sm rounded-circle bg-primary">
                  <i class="fa fa-money-bill-alt white"></i>
                </span>
              </div>
              <figcaption class="info">
                <h6 class="title">Reasonable prices</h6>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labor{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div class="col-md-4">
          <article class="card card-body">
            <figure class="itemside">
              <div class="aside">
                <span class="icon-sm rounded-circle bg-secondary">
                  <i class="fa fa-comment-dots white"></i>
                </span>
              </div>
              <figcaption class="info">
                <h6 class="title">Customer support 24/7 </h6>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labor{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div class="col-md-4">
          <article class="card card-body">
            <figure class="itemside">
              <div class="aside">
                <span class="icon-sm rounded-circle bg-success">
                  <i class="fa fa-truck white"></i>
                </span>
              </div>
              <figcaption class="info">
                <h6 class="title">Quick delivery</h6>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labor{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </>
  );
};

export default FeatureSupportBlock;
