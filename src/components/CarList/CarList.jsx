import { useSelector, useDispatch } from "react-redux";
import { incrementPage, resetCars } from "../../redux/cars/carsSlice.js";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/carsOperations.js";
import { normalizeFilters } from "../../components/normalizeFilters.js";

import CarCard from "../CarCard/CarCard.jsx";
import css from "./CarList.module.css";
import Loader from "../Loader/Loader.jsx";

export default function CarList() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cars.items);
  const page = useSelector((state) => state.cars.page);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const normalized = normalizeFilters(filters);
    dispatch(fetchCars({ page, ...normalized }));
  }, [dispatch, page, filters]);

  // Фільтрація
  dispatch(resetCars());
  dispatch(fetchCars({ page: 1, ...normalizeFilters(filters) }));

  // if (error) return <p>Error: {error}</p>;
  // if (!items.length && !isLoading) return <p>No cars found.</p>;

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {items.map((car, index) => (
          <CarCard key={`${car.id}-${index}`} car={car} />
        ))}
      </ul>

      <button
        className={css.btn}
        onClick={() => {
          dispatch(incrementPage());
        }}
      >
        Load more
      </button>
    </div>
  );
}
