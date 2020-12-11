import React, { useState, useEffect } from "react";
import { useStateValue } from "../../_service/StateProvider";
import "./Checkout.css";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { useAuth } from "../Route/Auth";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  const { authTokens } = useAuth();

  useEffect(() => {
    let totalSum = 0;
    basket.map((product) => {
      totalSum = totalSum + parseInt(product.price);
    });
    setTotal(totalSum);
    return () => {};
  });

  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };

  return (
    <>
      <Header />
      {basket.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="https://www.jumia.dz/images/oshun/cart/empty-cart.png"></img>
          <h2>Votre panier est vide !</h2>
          {!authTokens ? (
            <p>
              Vous avez déjà un compte? <Link to="/login">Connectez vous</Link>{" "}
              pour voir les articles dans votre panier.
            </p>
          ) : null}

          <Link to="/">Commancez vos achats</Link>
        </div>
      ) : (
        <section class="section-content padding-y">
          <div class="container" style={{ marginTop: "8rem" }}>
            <div class="row">
              <main class="col-md-9">
                <div class="card">
                  <table class="table table-borderless table-shopping-cart">
                    <thead class="text-muted">
                      <tr class="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" class="text-right" width="200">
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {basket.map((product) => (
                        <tr id={product.id}>
                          <td>
                            <figure class="itemside">
                              <div
                                class="aside"
                                style={{ width: "80px", height: "80px" }}
                              >
                                <img
                                  src={product.image}
                                  class="img-sm"
                                  style={{ width: "80px", height: "80px" }}
                                />
                              </div>
                              <figcaption class="info">
                                <a href="#" class="title text-dark">
                                  {product.title}
                                </a>
                                <p class="text-muted small">
                                  Size: XL, Color: blue, Brand: Gucci
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <select class="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </td>
                          <td>
                            <div class="price-wrap">
                              <var class="price">{product.price} DA</var>
                              <small class="text-muted"> $315.20 each </small>
                            </div>
                          </td>
                          <td class="text-right">
                            <a
                              data-original-title="Save to Wishlist"
                              title=""
                              href=""
                              class="btn btn-light"
                              data-toggle="tooltip"
                            >
                              {" "}
                              <i class="fa fa-heart"></i>
                            </a>
                            <a
                              class="btn btn-light"
                              onClick={() => {
                                removeFromBasket();
                              }}
                            >
                              {" "}
                              Remove
                            </a>
                          </td>
                        </tr>
                      ))}

                      {/* <tr>
                        <td>
                          <figure class="itemside">
                            <div class="aside">
                              <img src="images/items/2.jpg" class="img-sm" />
                            </div>
                            <figcaption class="info">
                              <a href="#" class="title text-dark">
                                Product name goes here nice
                              </a>
                              <p class="text-muted small">
                                Size: XL, Color: blue, Brand: Gucci
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select class="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </td>
                        <td>
                          <div class="price-wrap">
                            <var class="price">$149.97</var>
                            <small class="text-muted"> $75.00 each </small>
                          </div>
                        </td>
                        <td class="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            href=""
                            class="btn btn-light"
                            data-toggle="tooltip"
                          >
                            {" "}
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="" class="btn btn-light btn-round">
                            {" "}
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure class="itemside">
                            <div class="aside">
                              <img src="images/items/3.jpg" class="img-sm" />
                            </div>
                            <figcaption class="info">
                              <a href="#" class="title text-dark">
                                Another name of some product goes just here
                              </a>
                              <p class="small text-muted">
                                Size: XL, Color: blue, Brand: Tissot
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select class="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </td>
                        <td>
                          <div class="price-wrap">
                            <var class="price">$98.00</var>
                            <small class="text-muted"> $578.00 each</small>
                          </div>
                        </td>
                        <td class="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            href=""
                            class="btn btn-light"
                            data-toggle="tooltip"
                          >
                            {" "}
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="" class="btn btn-light btn-round">
                            {" "}
                            Remove
                          </a>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>

                  <div class="card-body border-top">
                    <Link
                      to="/onepagecheckout"
                      class="btn btn-primary float-md-right"
                    >
                      {" "}
                      Make Purchase <i class="fa fa-chevron-right"></i>{" "}
                    </Link>
                    <Link to="/" class="btn btn-light">
                      {" "}
                      <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                    </Link>
                  </div>
                </div>

                <div class="alert alert-success mt-3">
                  <p class="icontext">
                    <i class="icon text-success fa fa-truck"></i> Free Delivery
                    within 1-2 weeks
                  </p>
                </div>
              </main>
              <aside class="col-md-3">
                <div class="card mb-3">
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label>Have coupon?</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Coupon code"
                          />
                          <span class="input-group-append">
                            <button class="btn btn-primary">Apply</button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <dl class="dlist-align">
                      <dt>Total price:</dt>
                      <dd class="text-right">{total} DA</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Discount:</dt>
                      <dd class="text-right">USD 658</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Total:</dt>
                      <dd class="text-right  h5">
                        <strong>{total} DA</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p class="text-center mb-3">
                      <img src="images/misc/payments.png" height="26" />
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Checkout;
