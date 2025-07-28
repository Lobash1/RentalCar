import css from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <button className={css.btn} onClick={onClick} type="button">
      Load More
    </button>
  );
}
