import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations.js";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalCars: 0,
  limit: 12,
  totalPages: 0,
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
        state.isLoading = false;

        const { cars = [], totalCars, limit } = action.payload;
        const page = action.meta.arg.page;

        if (page === 1) {
          state.items = cars; // перезапис для першої сторінки
        } else {
          state.items = [...state.items, ...cars]; // додаємо нові машини
        }

        state.page = page;
        state.totalCars = totalCars;
        state.limit = limit;
        state.totalPages = Math.ceil(totalCars / limit);
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
