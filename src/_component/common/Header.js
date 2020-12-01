import React from "react";
import "../common/Header.css";
import { Link, Redirect } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../_service/StateProvider";
import { useAuth } from "../Route/Auth";

function Header() {
  const [{ basket }] = useStateValue();
  const { authTokens } = useAuth();

  const disconnect = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <header class="section-header">
        <section class="header-top-light border-bottom">
          <div class="container">
            <nav class="d-flex flex-column flex-md-row">
              <ul class="nav mr-auto d-none d-md-flex">
                <li>
                  <a href="#" class="nav-link px-2">
                    {" "}
                    <i class="fab fa-facebook"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2">
                    {" "}
                    <i class="fab fa-instagram"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2">
                    {" "}
                    <i class="fab fa-twitter"></i>{" "}
                  </a>
                </li>
              </ul>
              <ul class="nav">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    {" "}
                    Delivery{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    {" "}
                    Help{" "}
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    USD{" "}
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-right"
                    x-placement="bottom-end"
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(78px, 37px, 0px)",
                    }}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        EUR
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        AED
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        RUBL{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Language{" "}
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-right"
                    x-placement="bottom-end"
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(116px, 37px, 0px)",
                    }}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Russian{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-sm-4 col-12">
                <div class="brand-wrap">
                  <img
                    class="logo"
                    src="https://cdn.ycan.shop/stores/plazamark/others/VcQwd9iZuIripZFqOHKrQnlMiI0HThMOgHtr5QGn.png "
                  />
                </div>
              </div>
              <div class="col-lg-4 col-xl-5 col-sm-8 col-9">
                <form action="#" class="search">
                  <div class="input-group w-100">
                    <input
                      type="text"
                      class="form-control"
                      style={{ width: "55%" }}
                      placeholder="Search"
                    />
                    <select class="custom-select" name="category_name">
                      <option value="">All type</option>
                      <option value="codex">Special</option>
                      <option value="comments">Only best</option>
                      <option value="content">Latest</option>
                    </select>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-5 col-xl-4 col-sm-12">
                <div class="widgets-wrap float-md-right">
                  <a href="#" class="widget-header mr-2">
                    <div class="icon">
                      <i class="icon-sm rounded-circle border fa fa-shopping-cart"></i>
                      <span class="notify">0</span>
                    </div>
                  </a>
                  <a href="#" class="widget-header mr-2">
                    <div class="icon">
                      <i class="icon-sm rounded-circle border fa fa-heart"></i>
                    </div>
                  </a>
                  <div class="widget-header dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      data-offset="20,10"
                      aria-expanded="false"
                    >
                      <div class="icontext">
                        <div class="icon">
                          <i class="icon-sm rounded-circle border fa fa-user"></i>
                        </div>
                        <div class="text">
                          <small class="text-muted">Sign in | Join</small>
                          <div>
                            My account <i class="fa fa-caret-down"></i>{" "}
                          </div>
                        </div>
                      </div>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      x-placement="bottom-end"
                      style={{
                        position: "absolute",
                        willChange: "transform",
                        top: "0px",
                        left: "0px",
                        transform: "translate3d(154px, 42px, 0px)",
                      }}
                    >
                      <form class="px-4 py-3">
                        <div class="form-group">
                          <label>Email address</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div class="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Sign in
                        </button>
                      </form>
                      <hr class="dropdown-divider" />
                      <a class="dropdown-item" href="#">
                        Have account? Sign up
                      </a>
                      <a class="dropdown-item" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <br />
      <p style={{ maxWidth: "90%" }} class="mx-auto">
        Use any container for content body... Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br></br>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <a className="navbar-brand">PlaZaMark</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!authTokens ? (
              <li className="nav-item active">
                <Link to="/login">
                  <a className="nav-link">
                    Se connecter <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {`Bonjour, ${authTokens.username}`}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Votre compte
                  </a>
                  <a className="dropdown-item" href="#">
                    Vos commandes
                  </a>
                  <a className="dropdown-item" href="#">
                    Votre liste d'envis
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={disconnect}>
                    Déconnexion
                  </a>
                </div>
              </li>
            )}

            <li className="nav-item active">
              <a className="nav-link" href="#">
                Aide <span className="sr-only">(current)</span>
              </a>
            </li>
            <Link to="/cart">
              <li className="nav-item">
                <div class="widget-header  mr-3">
                  <a href="#" className="icon icon-sm rounded-circle border">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <span class="badge badge-pill badge-danger notify">
                    {basket.length}
                  </span>
                </div>
              </li>
            </Link>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav> */}
    </>
  );
}

export default Header;
