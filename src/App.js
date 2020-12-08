import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./_component/homeComponent/HomePage";
import Checkout from "../src/_component/CheckoutComponent/Checkout";
import CategoryPage from "./_component/categoryComponent/CategoryPage";
import ProductDetailPage from "./_component/productDetailComponent/ProductDetailPage";
import NotFoundPage from "./_component/common/NotFoundPage";
import Login from "./_component/LoginComponent/Login";
import PrivateRoute from "./_component/Route/PrivateRoute";
import OnePageCheckout from "../src/_component/CheckoutComponent/onepagecheckout";
import { authContext } from "./_component/Route/Auth";

import ScrollTopTop from "../src/_component/Route/ScrollToTop";

import Comment from "../src/_component/CommentComponent/Comment";

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("token"));
  const [authTokens, setAuthToken] = useState(existingTokens);

  const setToken = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthToken(data);
  };

  console.log(authTokens);

  const account = () => {
    return <div>account detail</div>;
  };
  return (
    <div className="App">
      <authContext.Provider value={{ authTokens, setAuthToken: setToken }}>
        <Router basename="/plazamark">
          <ScrollTopTop>
            <Switch>
              <Route exact path="/login" component={Login}>
                {authTokens ? <Redirect to="account" /> : <Login />}
              </Route>
              <Route exact path="/cart" component={Checkout} />
              <PrivateRoute
                exact
                path="/onepagecheckout"
                component={OnePageCheckout}
              >
                {/* {!authTokens ? <Redirect to="/login" /> : <OnePageCheckout />} */}
              </PrivateRoute>

              <PrivateRoute exact path="/account" component={account} />
              <Route exact path="/history" />
              <Route exact path="/products/:id" component={ProductDetailPage} />
              <Route
                exact
                path="/products/category/:id"
                component={CategoryPage}
              />

              <Route path="/comment" component={Comment} />

              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </ScrollTopTop>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
