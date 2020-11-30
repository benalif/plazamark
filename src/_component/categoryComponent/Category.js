import "./category.css";
import React from "react";
const Category = ({ title, imgSrc }) => {
  return (
    <div className="category">
      <img src={imgSrc} alt="category"></img>
      <p>{title}</p>
    </div>
  );
};
export default Category;
