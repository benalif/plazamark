import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { PRODUCT_IMAGES } from "../../_util/resources";

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
        {/* <aside class="col-md-12">
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
              {PRODUCT_IMAGES.map((image) => (
                <a class="item-thumb" onClick={() => changeImage(image)}>
                  <img src={image} style={{ cursor: "pointer" }} />
                </a>
              ))}
            </div>
          </article>
        </aside> */}
        <Carousel>
          {PRODUCT_IMAGES.map((image) => (
            <Carousel.Item>
              <div class="mx-auto d-flex justify-content-center">
                <img
                  className="
                 w-50"
                  src={image.url}
                  alt="First slide"
                  style={{ height: "550px" }}
                />
              </div>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}
