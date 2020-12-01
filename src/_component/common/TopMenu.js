import React from "react";

const TopMenu = () => {
  return (
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
  );
};

export default TopMenu;
