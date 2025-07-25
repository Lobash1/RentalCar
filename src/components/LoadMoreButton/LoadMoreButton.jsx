import css from "./LoadMoreButton.module.css";
import React from "react";

export default function LoadMoreButton({ onClick }) {
  return (
    <button className={css.btn} onClick={onClick} type="button">
      Load More
    </button>
  );
}
