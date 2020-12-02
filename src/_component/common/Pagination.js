import React from "react";
import "./Pagination.css";

export default function Pagination({ postPerPage, totalProdcut, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProdcut / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav
      class="mt-4 d-flex justify-content-center"
      aria-label="Page navigation sample"
    >
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
        {pageNumber.map((page) => {
          return (
            <li class="page-item active">
              <a
                class="page-link"
                href="#"
                onClick={(e) => {
                  paginate(page);
                  e.preventDefault();
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
