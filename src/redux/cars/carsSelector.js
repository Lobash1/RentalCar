export const selectPage = (state) => state.cars.page;
export const selectHasMore = (state) => state.cars.hasMore;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectPriceFilterOptions = createSelector([selectCars], (cars) =>
  [...new Set(cars.map((car) => car.rentalPrice).filter(Boolean))].sort(
    (a, b) => a - b
  )
);
