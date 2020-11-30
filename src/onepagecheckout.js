import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./_component/common/Header";
import Footer from "./_component/common/Footer";
import { useAuth } from "./_component/Route/Auth";

function OnePageCheckout() {
  const [{ basket }] = useStateValue();
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

  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  return (
    <>
      <Header />

      <section class="section-content padding-y">
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row">
            <main class="col-md-9">
              <div class="card" style={{ padding: "2rem" }}>
                <form
                  class="needs-validation"
                  novalidate
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div class="row form-group">
                    <div class="col">
                      <label for="validationTextarea">Nom</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col">
                      <label for="validationTextarea">Prénom</label>
                      <input
                        id="validationServer03"
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        aria-describedby="validationServer03Feedback"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="validationTextarea">Numéro de télephone</label>
                    <input
                      name=""
                      class="form-control"
                      placeholder="Numéro de télephone"
                      type="text"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>{" "}
                  <div class="form-group">
                    <label for="validationTextarea">Adresse</label>
                    <textarea
                      name=""
                      class="form-control"
                      placeholder="Adresse"
                      type="text"
                      rows="4"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>{" "}
                  <div class="form-group">
                    <label for="validationTextarea">Région</label>
                    <select id="inputState" class="form-control" required>
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>{" "}
                  <div class="form-group">
                    <label for="validationTextarea">Ville</label>
                    <select id="inputState" class="form-control">
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>{" "}
                  <label style={{ color: "red" }}>
                    Tous les champs sont requis *
                  </label>
                  <button type="submit" class="btn btn-primary btn-block">
                    {" "}
                    Enregistrer{" "}
                  </button>
                </form>
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
    </>
  );
}

export default OnePageCheckout;
