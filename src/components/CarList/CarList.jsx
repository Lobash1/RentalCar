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
import { useEffect } from "react";
import { setPage } from "../../redux/filters/filtersSlice.js";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton.jsx";

export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars) || [];
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  // const page = filters.page;

  useEffect(() => {
    dispatch(fetchCars({ page: filters.page, limit: 12 }));
  }, [dispatch, filters.page, filters.brand, filters.price, filters.mileage]);

  const handleLoadMore = () => {
    if (filters.page < totalPages) {
      dispatch(setPage(filters.page + 1));
    }
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

      <button
        className={css.btn}
        onClick={() => {
          dispatch(setPage(filters.page + 1));
        }}
      >
        Load more
      </button>
      {isLoading && <Loader />}
    </div>
  );
}
