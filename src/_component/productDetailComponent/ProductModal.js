import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ProductModal(props) {
  const { product } = props;
  const [image, setImage] = useState(product.image);

  const changeImage = (image) => setImage(image);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <aside class="col-md-12">
          <article class="gallery-wrap">
            <div
              class="img-big-wrap"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <a>
                <img src={image} />
              </a>
            </div>
            <div class="thumbs-wrap">
              <a
                class="item-thumb"
                onClick={() =>
                  changeImage(
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  )
                }
              >
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                class="item-thumb"
                onClick={() =>
                  changeImage(
                    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  )
                }
              >
                <img
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                class="item-thumb"
                onClick={() =>
                  changeImage(
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  )
                }
              >
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                class="item-thumb"
                onClick={() =>
                  changeImage(
                    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  )
                }
              >
                <img
                  src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </article>
        </aside>
      </Modal.Body>
    </Modal>
  );
}
