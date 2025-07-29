import css from "./LoadMoreButton.module.css";

// import { useDispatch, useSelector } from "react-redux";
// import { setPage } from "../../redux/filters/filtersSlice.js";
// import { selectFilters } from "../../redux/filters/filtersSelector.js";

export default function LoadMoreButton() {
  //   const dispatch = useDispatch();
  //   const { page } = useSelector(selectFilters);

  //   const handleLoadMore = () => {
  //     if (page < totalPages) {
  //       dispatch(setPage(page + 1));
  //     }
  //   };

  //   if (!totalPages || page >= totalPages) return null;
  //   console.log("Load More clicked. Current page:", page);

  return <button className={css.btn}>Load more</button>;
}
