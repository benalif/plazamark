import React from "react";
import "./Home.css";
import ProductHolder from "../../_component/ProductComponent/ProductHolder";

import TopMenu from "../common/TopMenu";
import SideMenu from "../common/SideMenu";
import FeatureBlock from "../common/FeatureBlock";
import BrandComponent from "../common/BrandsComponent";
function Home() {
  return (
    <>
      <TopMenu />
      <SideMenu />

      <div class="slider-items-owl owl-carousel owl-theme">
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              <span class="badge badge-danger"> New </span>
              <img src="images/items/1.jpg" />
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title text-truncate">
                <a href="#">First item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              {" "}
              <img src="images/items/2.jpg" />{" "}
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title">
                <a href="#">Second item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              {" "}
              <img src="images/items/3.jpg" />{" "}
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title">
                <a href="#">Third item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              {" "}
              <img src="images/items/4.jpg" />{" "}
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title">
                <a href="#">Good item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              {" "}
              <img src="images/items/5.jpg" />{" "}
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title">
                <a href="#">Another item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              {" "}
              <img src="images/items/3.jpg" />{" "}
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title">
                <a href="#">Third item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
        <div class="item-slide">
          <figure class="card card-product-grid">
            <div class="img-wrap">
              {" "}
              <img src="images/items/4.jpg" />{" "}
            </div>
            <figcaption class="info-wrap text-center">
              <h6 class="title">
                <a href="#">Good item name</a>
              </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="home__row">
        <ProductHolder
          title="Nos offres du jour"
          secondTitle="Voir plus"
        ></ProductHolder>
      </div>
      <div className="home__row">
        <ProductHolder
          title="100% chaussures"
          secondTitle="Voir plus"
        ></ProductHolder>
      </div>
      <div className="home__row">
        <ProductHolder
          title="Articles vus récement"
          secondTitle="Voir plus"
        ></ProductHolder>
      </div>
      <BrandComponent />
      <FeatureBlock />
    </>
  );
}

export default Home;
