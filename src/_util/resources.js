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
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/8491/1.jpg?5466"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/8491/1.jpg?4463"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/9171/1.jpg?8050"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
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

export const productsCategory = [
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8881/1.jpg?7746"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/7012/1.jpg?8907"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/4302/1.jpg?3289"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/8711/1.jpg?0419"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/7402/1.jpg?1727"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/6981/1.jpg?1710"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/8802/1.jpg?0493"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/0512/1.jpg?7876"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4501/1.jpg?6866"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/0771/1.jpg?5728"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0112/1.jpg?2067"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3671/1.jpg?2914"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/5981/1.jpg?2808"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/9981/1.jpg?5847"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/9212/1.jpg?5812"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/5402/1.jpg?1666"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/3671/1.jpg?2923"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/6391/1.jpg?6231"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/7102/1.jpg?7946"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/9981/1.jpg?4527"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/9501/1.jpg?9587"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/7502/1.jpg?4844"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/6981/1.jpg?6173"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/0771/1.jpg?5567"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/0771/1.jpg?5728"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/9381/1.jpg?6824"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/0602/1.jpg?0744"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/6902/1.jpg?4629"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/5402/1.jpg?1666"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/3671/1.jpg?2923"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg"
    price={15}
    rating={3}
  ></Product>,
];

export const productSportCategory = [
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8881/1.jpg?7746"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/7012/1.jpg?8907"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/4302/1.jpg?3289"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/8711/1.jpg?0419"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/7402/1.jpg?1727"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/6981/1.jpg?1710"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/8802/1.jpg?0493"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/0512/1.jpg?7876"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4501/1.jpg?6866"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/0771/1.jpg?5728"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0112/1.jpg?2067"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3671/1.jpg?2914"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/5981/1.jpg?2808"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/9981/1.jpg?5847"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/9212/1.jpg?5812"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/5402/1.jpg?1666"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/3671/1.jpg?2923"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/6391/1.jpg?6231"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/7102/1.jpg?7946"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/9981/1.jpg?4527"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/9501/1.jpg?9587"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/7502/1.jpg?4844"
    price={15}
    rating={3}
  ></Product>,
  <Product
    id="11212"
    title="SYSTEMES DECISIONNELS ET MODELISTATION M"
    image="https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/6981/1.jpg?6173"
    price={15}
    rating={3}
  ></Product>,
];
