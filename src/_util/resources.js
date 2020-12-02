import React from "react";
import Category from "../_component/categoryComponent/Category";
import Product from "../_component/ProductComponent/Product";

export const BASE_URL = "https://fakestoreapi.com";
export const PRODUCT_URL = BASE_URL + "/products";
export const CATEGORY_PRODUCTS_URL = BASE_URL + "/products/category/";

export const categories = [
  <Category
    title="Sport"
    imgSrc="https://dz.jumia.is/cms/00_Collections/W31/widg-sport-6.jpg"
  ></Category>,
  <Category
    title="Fashion"
    imgSrc="https://dz.jumia.is/cms/00_Collections/W31/widg-aise-5.jpg"
  ></Category>,
  <Category
    title="Cuisine"
    imgSrc="https://dz.jumia.is/cms/00_Collections/W31/widg-chef-2.jpg"
  ></Category>,
  <Category
    title="Smartie"
    imgSrc="https://dz.jumia.is/cms/00_Collections/W31/widg-smart-10.jpg"
  ></Category>,
  <Category
    title="Batiment"
    imgSrc="https://dz.jumia.is/cms/00_Camp20/Auguste/Collection_W32/COL_DECO.png"
  ></Category>,
  <Category
    title="Jeux"
    imgSrc="https://dz.jumia.is/cms/00_Collections/W31/widg-game-3.jpg"
  ></Category>,
];

export const categories2 = [
  {
    title: "Sport",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/SNEAKER_DESK.jpg",
  },
  {
    title: "Fashion",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/RASAGE_DESK.jpg",
  },
  {
    title: "Sport",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/LISSEUR_DESK.jpg",
  },
  {
    title: "Fashion",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/SHORT_DESK.jpg",
  },
  {
    title: "Sport",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/hp_desktop_robe.png",
  },
  {
    title: "Fashion",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/BLENDER_DESK.jpg",
  },
  {
    title: "Sport",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/SMARTWATCH_DESKs.jpg",
  },
  {
    title: "Fashion",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/TSHIRT_DESK.jpg",
  },
  {
    title: "Sport",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/MASCARA_DESK.jpg",
  },
  {
    title: "Fashion",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/CREME_DESK.jpg",
  },
  {
    title: "Sport",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/SNEAKER_DESK.jpg",
  },
  {
    title: "Fashion",
    imgSrc: "https://dz.jumia.is/cms/00_Homepage_TopCat/RASAGE_DESK.jpg",
  },
];

export const products = [
  <Product
    id="1"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/8491/1.jpg?5466"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="1"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/8491/1.jpg?4463"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="1"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/9171/1.jpg?8050"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="1"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/5312/1.jpg?0944"
    price={15}
    rating={3}
  ></Product>,
  // <Product
  //   id="11212"
  //   title="SYSTEMES DECISIONNELS ET MODELISTATION M"
  //   image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/1521/1.jpg?4725"
  //   price={15}
  //   rating={3}
  // ></Product>,
  // <Product
  //   id="11212"
  //   title="SYSTEMES DECISIONNELS ET MODELISTATION M"
  //   image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/7521/1.jpg?8107"
  //   price={15}
  //   rating={3}
  // ></Product>,
];

export const productsCategory = [];
