import React from "react";

const SideMenu = () => {
  const iconsStyle = {
    marginRight: "5px",
  };
  return (
    <section class="section-main bg padding-y">
      <div class="container">
        <div class="row">
          <aside class="col-md-3">
            <nav class="card">
              <ul class="menu-category">
                <li className="d-flex">
                  <a href="#">
                    <i
                      class="fa fa-home fa-fw"
                      aria-hidden="true"
                      style={iconsStyle}
                    />
                    Best clothes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa fa-car"
                      aria-hidden="true"
                      style={iconsStyle}
                    ></i>
                    Automobiles
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa fa-home"
                      aria-hidden="true"
                      style={iconsStyle}
                    ></i>
                    Home interior
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa fa-car"
                      aria-hidden="true"
                      style={iconsStyle}
                    ></i>
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa fa-car"
                      aria-hidden="true"
                      style={iconsStyle}
                    ></i>
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa fa-car"
                      aria-hidden="true"
                      style={iconsStyle}
                    ></i>
                    Digital goods
                  </a>
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
                      <a href="#">
                        <i
                          class="fa fa-car"
                          aria-hidden="true"
                          style={iconsStyle}
                        ></i>
                        Some others
                      </a>
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
  );
};
export default SideMenu;
