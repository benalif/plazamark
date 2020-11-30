import React from "react";
import "./Pagination.css";

export default function Pagination({ postPerPage, totalProdcut, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProdcut / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {pageNumber.map((page) => {
        return (
          <a
            onClick={(e) => {
              paginate(page);
              e.preventDefault();
            }}
            href="!#"
            className="page-link"
            style={{
              margin: "3px",
              padding: "10px",
              textDecoration: "none",
              border: "1px solid grey",
            }}
          >
            {page}
          </a>
        );
      })}
    </div>
  );
}
