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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav>
    </>
  );
}

export default Header;
