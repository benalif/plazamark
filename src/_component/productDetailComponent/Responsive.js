import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "../productDetailComponent/ProductDetail.css";
import { products } from "../../resources";
import ProductHoder from "../../ProductHolder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Responsive = () => {
  const classes = useStyles();

  const [mainImage, setMainImage] = useState({});
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setMainImage({
      id: "det_img_156865fbd047231f47_41131",
      className: "ty-pict",
      src:
        "https://market.yassir.io/images/thumbnails/75/90/detailed/41/1_8eaq-5v.jpg",
    });
  }, []);

  let data = {
    title: "Lunettes De Soleil Unisexe - NDW100006 - Noir/Rose Clair",
    ordinaryPrice: "8 000 DZD",
    price: "2500 DA",
    reference: "VS49",
    availble: "56 Articles",
    quantity: "",
    img: [
      {
        id: "det_img_156865fbd047231f47_41131",
        className: "ty-pict",
        src:
          "https://market.yassir.io/images/thumbnails/75/90/detailed/41/1_8eaq-5v.jpg",
        srcBig:
          "https://market.yassir.io/images/thumbnails/500/600/detailed/41/1_8eaq-5v.jpg",
      },
      {
        id: "det_img_156865fbd047231f47_41131",
        class: "ty-pict",
        src:
          "https://market.yassir.io/images/thumbnails/75/90/detailed/41/2_qpur-zb.jpg",
        srcBig:
          "https://market.yassir.io/images/thumbnails/500/600/detailed/41/2_qpur-zb.jpg",
      },
      {
        id: "det_img_156865fbd047231f47_41131",
        class: "ty-pict",
        src:
          "https://market.yassir.io/images/thumbnails/75/90/detailed/41/4_rxyl-jf.jpg",
        srcBig:
          "https://market.yassir.io/images/thumbnails/500/600/detailed/41/4_rxyl-jf.jpg",
      },
      {
        id: "det_img_156865fbd047231f47_41131",
        class: "ty-pict",
        src:
          "https://market.yassir.io/images/thumbnails/75/90/detailed/41/3_sesb-zc.jpg",
        srcBig:
          "https://market.yassir.io/images/thumbnails/500/600/detailed/41/3_sesb-zc.jpg",
      },
    ],
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="product-images">
            <div className="product-images__other-images">
              {data.img.map((img, id) => (
                <div
                  key={id}
                  className="product-images__other-images_img"
                  onClick={() => {
                    setMainImage({
                      id: "det_img_156865fbd047231f47_41131",
                      className: "ty-pict",
                      src: img.src,
                    });
                  }}
                >
                  <img
                    id={img.id}
                    className={img.class}
                    src={img.src}
                    alt=""
                    title=""
                  />
                </div>
              ))}
            </div>
            <div className="product-images__main-image" onMouseMove={null}>
              {/* <div className="rect"></div> */}
              <img
                id={mainImage.id}
                className={mainImage.class}
                src={mainImage.src}
                alt=""
                title=""
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="product-detail__detail">
            <div className="poduct-detail__detail__detail">
              <h1>{data.title}</h1>
              <a href="" style={{ marginTop: "5px", marginBottom: "10px" }}>
                Ajouter un avis
              </a>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                Prix ordinaire: {data.ordinaryPrice}
              </p>
              <p
                style={{
                  marginTop: "5px",
                  marginBottom: "10px",
                  fontSize: "25px",
                }}
              >
                {data.price}
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                Reference: <span>{data.reference}</span>
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                Diponibilité: <span>{data.availble}</span>
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                Quantité: <span>{data.quantity}</span>
              </p>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "0px",
                  padding: "5px",
                }}
              >
                AJOUTER AU PANIER
              </button>
            </div>
            <div className="product-detail__detail__description">
              <p>
                Les verres Northweek polarisés fabriqués en triacétate de
                cellulose d'origine allemande, procurent une grande flexibilité
                et protection UV400. Nos montures en polycarbonate de haute
                qualité s'adaptent parfaitement aux contours du visage et ont
                une grande durabilité et résistance.
              </p>
              <br></br>
              <p>
                Nous réinterprétons le modèle classique de Northweek en ajoutant
                un dégradé bicolore. Les Gradiant Amare se distinguent par leur
                versatilité : une conception traditionnelle mais avec des
                couleurs extrêmes. Oserez-vous ?
              </p>

              <ul>
                <li>Modèle unisexe.</li>
                <li>
                  Dimensions : Avant 14 cm x Hauteur 4,75 cm x Branches 14,33
                  cm.
                </li>
                <li>
                  Comprend : un étui, une housse de protection en microfibre, un
                  peau de chamois et un set d'autocollants.
                </li>
                <li>couleur : gris & bleu</li>
                <li>marque : northweek</li>
                <li>protection : uv400</li>
                <li>verres polarisés traitement anti-rayures</li>
                <li>protection aux chocs</li>
              </ul>
              <br></br>
              <p>Spécifications :</p>
              <ul>
                <li>Modèle unisexe.</li>
                <li>
                  Dimensions : Avant 14 cm x Hauteur 4,75 cm x Branches 14,33
                  cm.
                </li>
                <li>
                  Comprend : un étui, une housse de protection en microfibre, un
                  peau de chamois et un set d'autocollants.
                </li>
                <li>couleur : gris & bleu</li>
                <li>marque : northweek</li>
                <li>protection : uv400</li>
                <li>verres polarisés traitement anti-rayures</li>
                <li>protection aux chocs</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <ProductHoder
            title="Produits similaires"
            secondTitle="Voir plus"
            products={products}
          ></ProductHoder>
        </Grid>
      </Grid>
    </div>
  );
};

export default Responsive;
