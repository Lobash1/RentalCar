import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations.js";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalCars: 0,
  limit: 12,
  totalPages: 1,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.totalCars = 0;
      state.totalPages = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        // state.isLoading = false;
        // const { cars = [], totalCars, limit } = action.payload;
        // const page = action.meta.arg.page;
        // if (page === 1) {
        //   state.items = cars;
        // } else {
        //   state.items = [...state.items, ...cars];
        // }
        // state.page = page;
        // state.totalCars = totalCars;
        // state.limit = limit;
        // state.totalPages = Math.ceil(totalCars / limit);
        console.log(
          "Fetched cars:",
          action.payload.cars.length,
          "Page:",
          action.meta.arg.page
        );
        state.isLoading = false;
        state.error = null;
        state.totalPages = action.payload.totalPages;

        if (action.meta.arg.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }
        state.page = action.meta.arg.page;
      })

      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload || action.error.message || "Error fetching cars";
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
