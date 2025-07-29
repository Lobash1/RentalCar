// import css from "./Pagination.module.css";
// import { useDispatch } from "react-redux";
// import { setPage } from "../../redux/filters/filtersSlice.js";
// // import { fetchCars } from "../../redux/cars/carsOperations.js";

// export default function Pagination({ totalPages, currentPage }) {
//   const dispatch = useDispatch();

//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   const pages = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(
//       <button
//         className={css.btn}
//         key={i}
//         disabled={i === currentPage}
//         onClick={() => handlePageChange(i)}
//       >
//         Load more {1}
//       </button>
//     );
//   }

//   return <div>{pages}</div>;
// }
