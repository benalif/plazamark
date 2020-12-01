import React, { useState, useEffect } from "react";
import "./CategoryView.css";
import {
  products,
  productsCategory,
  productSportCategory,
} from "../../_util/resources";

const CategoryView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);
  const [ProductNubmer, setProductNumber] = useState();

  useEffect(() => {
    getProduct();
  }, 0);

  // Get current posts
  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  let currentProducts;

  if (window.location.pathname.replace("/", "") === "Sport") {
    currentProducts = productSportCategory.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
  } else {
    currentProducts = productsCategory.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function getProduct() {
    if (window.location.pathname.replace("/", "") === "Sport") {
      setProductNumber(productSportCategory.length);
    } else {
      setProductNumber(productsCategory.length);
    }
  }

  return (
    <>
      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-md-3">
              <div class="card">
                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_1"
                      aria-expanded="true"
                      class=""
                    >
                      <i class="icon-control fa fa-chevron-down"></i>
                      <h6 class="title">Product type</h6>
                    </a>
                  </header>
                  <div
                    class="filter-content collapse show"
                    id="collapse_1"
                    style={{}}
                  >
                    <div class="card-body">
                      <form class="pb-3">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-light" type="button">
                              <i class="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>

                      <ul class="list-menu">
                        <li>
                          <a href="#">People </a>
                        </li>
                        <li>
                          <a href="#">Watches </a>
                        </li>
                        <li>
                          <a href="#">Cinema </a>
                        </li>
                        <li>
                          <a href="#">Clothes </a>
                        </li>
                        <li>
                          <a href="#">Home items </a>
                        </li>
                        <li>
                          <a href="#">Animals</a>
                        </li>
                        <li>
                          <a href="#">People </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_2"
                      aria-expanded="true"
                      class=""
                    >
                      <i class="icon-control fa fa-chevron-down"></i>
                      <h6 class="title">Brands </h6>
                    </a>
                  </header>
                  <div
                    class="filter-content collapse show"
                    id="collapse_2"
                    style={{}}
                  >
                    <div class="card-body">
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          checked=""
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">
                          Mercedes
                          <b class="badge badge-pill badge-light float-right">
                            120
                          </b>{" "}
                        </div>
                      </label>
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          checked=""
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">
                          Toyota
                          <b class="badge badge-pill badge-light float-right">
                            15
                          </b>{" "}
                        </div>
                      </label>
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          checked=""
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">
                          Mitsubishi
                          <b class="badge badge-pill badge-light float-right">
                            35
                          </b>{" "}
                        </div>
                      </label>
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          checked=""
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">
                          Nissan
                          <b class="badge badge-pill badge-light float-right">
                            89
                          </b>{" "}
                        </div>
                      </label>
                      <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" />
                        <div class="custom-control-label">
                          Honda
                          <b class="badge badge-pill badge-light float-right">
                            30
                          </b>{" "}
                        </div>
                      </label>
                    </div>
                  </div>
                </article>
                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_3"
                      aria-expanded="true"
                      class=""
                    >
                      <i class="icon-control fa fa-chevron-down"></i>
                      <h6 class="title">Price range </h6>
                    </a>
                  </header>
                  <div
                    class="filter-content collapse show"
                    id="collapse_3"
                    style={{}}
                  >
                    <div class="card-body">
                      <input
                        type="range"
                        class="custom-range"
                        min="0"
                        max="100"
                        name=""
                      />
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Min</label>
                          <input
                            class="form-control"
                            placeholder="$0"
                            type="number"
                          />
                        </div>
                        <div class="form-group text-right col-md-6">
                          <label>Max</label>
                          <input
                            class="form-control"
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>
                      </div>
                      <button class="btn btn-block btn-primary">Apply</button>
                    </div>
                  </div>
                </article>
                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_4"
                      aria-expanded="true"
                      class=""
                    >
                      <i class="icon-control fa fa-chevron-down"></i>
                      <h6 class="title">Sizes </h6>
                    </a>
                  </header>
                  <div
                    class="filter-content collapse show"
                    id="collapse_4"
                    style={{}}
                  >
                    <div class="card-body">
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XS </span>
                      </label>

                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> SM </span>
                      </label>

                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> LG </span>
                      </label>

                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XXL </span>
                      </label>
                    </div>
                  </div>
                </article>
                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_5"
                      aria-expanded="false"
                      class=""
                    >
                      <i class="icon-control fa fa-chevron-down"></i>
                      <h6 class="title">More filter </h6>
                    </a>
                  </header>
                  <div
                    class="filter-content collapse in"
                    id="collapse_5"
                    style={{}}
                  >
                    <div class="card-body">
                      <label class="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          checked=""
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">Any condition</div>
                      </label>

                      <label class="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">Brand new </div>
                      </label>

                      <label class="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">Used items</div>
                      </label>

                      <label class="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          class="custom-control-input"
                        />
                        <div class="custom-control-label">Very old</div>
                      </label>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main class="col-md-9">
              <header class="border-bottom mb-4 pb-3">
                <div class="form-inline">
                  <span class="mr-md-auto">32 Items found </span>
                  <select class="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                  <div class="btn-group">
                    <a
                      href="#"
                      class="btn btn-outline-secondary"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="List view"
                    >
                      <i class="fa fa-bars"></i>
                    </a>
                    <a
                      href="#"
                      class="btn  btn-outline-secondary active"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Grid view"
                    >
                      <i class="fa fa-th"></i>
                    </a>
                  </div>
                </div>
              </header>

              <div class="row">
                {products.map((product) => (
                  <div class="col-md-4">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src={product.props.image} />
                        <a class="btn-overlay" href="#">
                          <i class="fa fa-search-plus"></i> Quick view
                        </a>
                      </div>
                      <figcaption class="info-wrap">
                        <div class="fix-height">
                          <a href="#" class="title">
                            {product.props.title}
                          </a>
                          <div class="price-wrap mt-2">
                            <span class="price">{product.props.price}</span>
                          </div>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">
                          Add to cart{" "}
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
              <nav class="mt-4" aria-label="Page navigation sample">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryView;
