import { useSelector, useDispatch } from "react-redux";
import { incrementPage, resetCars } from "../../redux/cars/carsSlice.js";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/carsOperations.js";

import {
  selectCars,
  selectPage,
  selectHasMore,
  selectIsLoading,
  selectIsPaginating,
} from "../../redux/cars/carsSelector.js";

import CarCard from "../CarCard/CarCard.jsx";
import css from "./CarList.module.css";
import Loader from "../Loader/Loader.jsx";

export default function CarList() {
  const dispatch = useDispatch();

  const items = useSelector(selectCars);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectIsLoading);
  const isPaginating = useSelector(selectIsPaginating);

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, limit: 12 }));
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCars({ page, limit: 12 }));
    }
  }, [dispatch, page]);

  if (isLoading) {
    return (
      <div className="loaderWrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className={css.catalog}>
      {items.length === 0 && !isLoading && (
        <p className={css.empty}>No cars found</p>
      )}

      <ul className={css.list}>
        {items.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>

      {isPaginating && <Loader />}

      {hasMore && !isLoading && !isPaginating && (
        <button className={css.btn} onClick={() => dispatch(incrementPage())}>
          Load more
        </button>
      )}
    </div>
  );
}
