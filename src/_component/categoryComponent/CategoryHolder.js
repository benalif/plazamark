import React, { useEffect } from "react";
import "../categoryComponent/CategoryHolder.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import Category from "./Category";

const CategoryHolder = ({ title, secondTitle, categories }) => {
  return (
    <div className="category-holder">
      <div className="category-holder__header">
        <h2>{title}</h2>
        <div className="second-title">
          <a href="#" className="second-title__header">
            <p>{secondTitle}</p>
            <ArrowForwardIosIcon
              fontSize="small"
              style={{ color: "red", paddingTop: "2px" }}
            ></ArrowForwardIosIcon>
          </a>
        </div>
      </div>
      <div className="category-holder__categories">
        {categories.map((category) => {
          return (
            <Link
              to={`/product-category/${category.title}`}
              style={{ textDecoration: "none" }}
            >
              <Category
                title={category.title}
                imgSrc={category.imgSrc}
              ></Category>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryHolder;
