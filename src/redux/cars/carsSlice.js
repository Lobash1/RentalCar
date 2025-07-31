import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    hasMore: true,
    isLoading: false,
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
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const cars = Array.isArray(action.payload) ? action.payload : [];
        const existingIds = new Set(state.items.map((car) => car.id));
        const newCars = cars.filter((car) => !existingIds.has(car.id));
        state.items = [...state.items, ...newCars];
        state.isLoading = false;
        state.hasMore = cars.length > 0;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to load cars";
      });
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export default carsSlice.reducer;
