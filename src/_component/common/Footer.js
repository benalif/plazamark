import React from "react";
import "../common/Footer.css";

const Footer = () => {
  return (
    <>
      <br />
      <p class="px-4">
        {" "}
        ... <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <br />
      <footer class="section-footer border-top">
        <div class="container">
          <section class="footer-top padding-y">
            <div class="row">
              <aside class="col-md-4">
                <article class="mr-3">
                  <img
                    src="bootstrap-ecommerce-html/images/logo.png"
                    class="logo-footer"
                  />
                  <p class="mt-3">
                    Some short text about company like You might remember the
                    Dell computer commercials in which a youth reports this
                    exciting news to his friends.
                  </p>
                  <div>
                    <a
                      class="btn btn-icon btn-light"
                      title="Facebook"
                      target="_blank"
                      href="#"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-icon btn-light"
                      title="Instagram"
                      target="_blank"
                      href="#"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-icon btn-light"
                      title="Youtube"
                      target="_blank"
                      href="#"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                    <a
                      class="btn btn-icon btn-light"
                      title="Twitter"
                      target="_blank"
                      href="#"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </article>
              </aside>
              <aside class="col-sm-3 col-md-2">
                <h6 class="title">About</h6>
                <ul class="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Rules and terms</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </aside>
              <aside class="col-sm-3 col-md-2">
                <h6 class="title">Services</h6>
                <ul class="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">Help center</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Money refund</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Terms and Policy</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Open dispute</a>
                  </li>
                </ul>
              </aside>
              <aside class="col-sm-3  col-md-2">
                <h6 class="title">For users</h6>
                <ul class="list-unstyled">
                  <li>
                    {" "}
                    <a href="#"> User Login </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> User register </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Account Setting </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> My Orders </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> My Wishlist </a>
                  </li>
                </ul>
              </aside>
              <aside class="col-sm-2  col-md-2">
                <h6 class="title">Our app</h6>
                <a href="#" class="d-block mb-2">
                  <img
                    src="bootstrap-ecommerce-html/images/misc/appstore.png"
                    height="40"
                  />
                </a>
                <a href="#" class="d-block mb-2">
                  <img
                    src="bootstrap-ecommerce-html/images/misc/playmarket.png"
                    height="40"
                  />
                </a>
              </aside>
            </div>
          </section>
          <section class="footer-copyright border-top">
            <p class="float-left text-muted">
              {" "}
              © 2019 Company All rights reserved{" "}
            </p>
            <p target="_blank" class="float-right text-muted">
              <a href="#">Privacy &amp; Cookies</a> &nbsp; &nbsp;
              <a href="#">Accessibility</a>
            </p>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
