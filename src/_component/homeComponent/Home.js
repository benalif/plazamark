import React from "react";
import "./Home.css";
import ProductHolder from "../../_component/ProductComponent/ProductHolder";

import { products } from "../../_util/resources";
import TopMenu from "../common/TopMenu";
import SideMenu from "../common/SideMenu";
import FeatureBlock from "../common/FeatureBlock";
function Home() {
  return (
    <>
      <TopMenu />
      <SideMenu />

      <div className="home__row">
        <ProductHolder
          title="Nos offres du jour"
          secondTitle="Voir plus"
          products={products}
        ></ProductHolder>
      </div>
      <div className="home__row">
        <ProductHolder
          title="100% chaussures"
          secondTitle="Voir plus"
          products={products}
        ></ProductHolder>
      </div>
      <div className="home__row">
        <ProductHolder
          title="Articles vus récement"
          secondTitle="Voir plus"
          products={products}
        ></ProductHolder>
      </div>
      <FeatureBlock />
    </>
  );
}

export default Home;
