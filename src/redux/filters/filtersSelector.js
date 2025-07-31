import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = createSelector(
  (state) => state.filters,
  (filters) => ({
    brand: filters.brand,
    rentalPrice: filters.rentalPrice,
    mileage: {
      minMileage: filters.mileage?.minMileage || "",
      maxMileage: filters.mileage?.maxMileage || "",
    },
  })
);

// export const selectFilters = (state) => state.filters;

export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.price;
export const selectMileage = (state) => state.filters.mileage;
export const selectTotalPages = (state) => state.cars.totalPages;
