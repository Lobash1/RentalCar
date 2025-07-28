import { useSelector, useDispatch } from "react-redux";
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectTotalPages,
} from "../../redux/cars/carsSelector.js";
import { selectFilters } from "../../redux/filters/filtersSelector.js";
import { fetchCars } from "../../redux/cars/carsOperations.js";
import CarCard from "../CarCard/CarCard.jsx";
import css from "./CarList.module.css";
import Loader from "../Loader/Loader.jsx";
import { setPage } from "../../redux/filters/filtersSlice.js";
import { useEffect } from "react";

export default function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars) || [];
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    const { page, ...restFilters } = filters;
    // console.log("CarList useEffect triggered. Filters:", filters);
    dispatch(fetchCars({ page, limit: 12, filters: restFilters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const newPage = filters.page + 1;
    dispatch(setPage(newPage));
  };

  if (error) return <p>Error: {error}</p>;
  if (!cars.length && !isLoading) return <p>No cars found.</p>;

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {cars.map((car, index) => (
          <CarCard key={`${car.id}-${index}`} car={car} />
        ))}
      </ul>
      {isLoading && <Loader />}
      {!isLoading && filters.page < totalPages && (
        <button onClick={handleLoadMore} className={css.loadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
