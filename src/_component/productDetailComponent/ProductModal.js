import React from "react";

const ProductModal = ({ product }) => {
  return (
    <>
      <div
        class="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                {product.title}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="row no-gutters">
                  <aside class="col-md-12">
                    <article class="gallery-wrap">
                      <div
                        class="img-big-wrap"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <a>
                          <img src={product.image} />
                        </a>
                      </div>

                      <div class="thumbs-wrap">
                        <a class="item-thumb" onClick={() => {}}>
                          <img
                            src={product.image}
                            style={{ cursor: "pointer" }}
                          />
                        </a>
                      </div>
                    </article>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
