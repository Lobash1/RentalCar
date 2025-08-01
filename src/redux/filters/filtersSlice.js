import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: null,
  mileage: {
    minMileage: "",
    maxMileage: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterBrand(state, action) {
      state.brand = action.payload;
    },
    setFilterPrice(state, action) {
      state.rentalPrice = action.payload;
    },
    setFilterMileage(state, action) {
      state.mileage = {
        ...state.mileage,
        ...action.payload,
      };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setFilterBrand,
  setFilterPrice,
  setFilterMileage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
