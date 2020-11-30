import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import HomePage from "./_component/homeComponent/HomePage";
import Checkout from "./Checkout";
import CategoryPage from "./_component/categoryComponent/CategoryPage";
import ProductDetailPage from "./_component/productDetailComponent/ProductDetailPage";
import NotFoundPage from "./_component/common/NotFoundPage";
import Login from "./_component/LoginComponent/Login";
import PrivateRoute from "./_component/Route/PrivateRoute";
import OnePageCheckout from "./onepagecheckout";
import { authContext } from "./_component/Route/Auth";

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
        <Router>
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
            <Route
              exact
              path="/product/:productDetail"
              component={ProductDetailPage}
            />
            <Route
              exact
              path="/product-category/:categoryId"
              component={CategoryPage}
            />

            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
