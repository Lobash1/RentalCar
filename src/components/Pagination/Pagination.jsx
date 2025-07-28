import { useDispatch } from "react-redux";
import { setPage } from "../../redux/filters/filtersSlice.js";
import { fetchCars } from "../../redux/cars/carsOperations.js";

export default function Pagination({ totalPages, currentPage }) {
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchCars());
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        disabled={i === currentPage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return <div>{pages}</div>;
}
