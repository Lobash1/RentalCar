import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById } from "../cars/carsOperations.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    hasMore: true,
    isLoading: false,
    isPaginating: false,
    error: null,
    selectedCar: null,
  },
  reducers: {
    resetCars: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        const page = action.meta.arg.page;
        state.error = null;
        if (page === 1) {
          state.isLoading = true;
          state.isPaginating = false;
        } else {
          state.isPaginating = true;
        }
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const cars = Array.isArray(action.payload) ? action.payload : [];

        const { mileage = {} } = action.meta.arg.filters || {};
        const min = Number(mileage.minMileage);
        const max = Number(mileage.maxMileage);

        const filteredCars = cars.filter((car) => {
          const m = car.mileage;
          const fromOk = !isNaN(min) ? m >= min : true;
          const toOk = !isNaN(max) ? m <= max : true;
          return fromOk && toOk;
        });

        const existingIds = new Set(state.items.map((car) => car.id));
        const newCars = filteredCars.filter((car) => !existingIds.has(car.id));

        state.items = [...state.items, ...newCars];
        state.isLoading = false;
        state.isPaginating = false;

        const limit = action.meta.arg.limit || 12;
        state.hasMore = filteredCars.length === limit;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isPaginating = false;
        state.error = action.payload || "Failed to load cars";
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.selectedCar = null;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.selectedCar = null;
        state.error = action.payload || "Failed to load car details";
      });
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export default carsSlice.reducer;
