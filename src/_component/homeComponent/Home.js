import React from "react";
import "./Home.css";
import Product from "../../Product";
import ProductHolder from "../../ProductHolder";
import CategoryHolder from "../categoryComponent/CategoryHolder";

import { categories, categories2, products } from "../../resources";
import SimpleSlider from "../../SimpleSlider";
function Home() {
  const settings = {
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Supermarket
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Partnership
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Baby &amp; Toys
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fitness sport
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Clothing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Furnitures
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {" "}
                  More
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Foods and Drink
                  </a>
                  <a class="dropdown-item" href="#">
                    Home interior
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Category 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Category 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Category 3
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="section-main bg padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-md-3">
              <nav class="card">
                <ul class="menu-category">
                  <li>
                    <a href="#">Best clothes</a>
                  </li>
                  <li>
                    <a href="#">Automobiles</a>
                  </li>
                  <li>
                    <a href="#">Home interior</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Technologies</a>
                  </li>
                  <li>
                    <a href="#">Digital goods</a>
                  </li>
                  <li class="has-submenu">
                    <a href="#">More items</a>
                    <ul class="submenu">
                      <li>
                        <a href="#">Submenu name</a>
                      </li>
                      <li>
                        <a href="#">Great submenu</a>
                      </li>
                      <li>
                        <a href="#">Another menu</a>
                      </li>
                      <li>
                        <a href="#">Some others</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
            <div class="col-md-9">
              <article class="banner-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/2.jpg"
                  class="w-100 rounded"
                />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="home__row">
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/8712/1.jpg?3728"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/8712/1.jpg?3728"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/5891/1.jpg?0397"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/8712/1.jpg?3728"
          price={15}
          rating={3}
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8712/1.jpg?3729"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/8712/1.jpg?3728"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/2521/1.jpg?6741"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/1631/1.jpg?1903"
          price={15}
          rating={3}
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/6421/1.jpg?0243"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/8612/1.jpg?7985"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/0712/1.jpg?4223"
          price={15}
          rating={3}
        ></Product>
        <Product
          id="11212"
          title="SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018"
          image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/1121/1.jpg?6115"
          price={15}
          rating={3}
        ></Product>
      </div> */}
      <div className="home__row">
        <ProductHolder
          title="Nos offres du jour"
          secondTitle="Voir plus"
          products={products}
        ></ProductHolder>
      </div>
      <div className="home__row">
        <ProductHolder
          title="100% chaussures"
          secondTitle="Voir plus"
          products={products}
        ></ProductHolder>
      </div>
      <div className="home__row">
        <ProductHolder
          title="Articles vus récement"
          secondTitle="Voir plus"
          products={products}
        ></ProductHolder>
      </div>
      <div class="home__row">
        <div class="col-md-3">
          <article class="card card-body">
            <figure class="text-center">
              <span class="rounded-circle icon-md bg-primary">
                <i class="fa fa-user white"></i>
              </span>
              <figcaption class="pt-4">
                <h5 class="title">Creative Strategy &amp; solution</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div class="col-md-3">
          <article class="card card-body">
            <figure class="text-center">
              <span class="rounded-circle icon-md bg-danger">
                <i class="fa fa-truck white"></i>
              </span>
              <figcaption class="pt-4">
                <h5 class="title">Creative Strategy &amp; solution</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div class="col-md-3">
          <article class="card card-body">
            <figure class="text-center">
              <span class="rounded-circle icon-md bg-success">
                <i class="fa fa-star white"></i>
              </span>
              <figcaption class="pt-4">
                <h5 class="title">Creative Strategy &amp; solution</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div class="col-md-3">
          <article class="card card-body">
            <figure class="text-center">
              <span class="rounded-circle icon-md bg-secondary">
                <i class="far fa-clock white"></i>
              </span>
              <figcaption class="pt-4">
                <h5 class="title">Creative Strategy &amp; solution</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod{" "}
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
