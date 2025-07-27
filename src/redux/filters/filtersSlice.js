import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  },
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setMileageFrom: (state, action) => {
      state.mileageFrom = action.payload;
    },
    setMileageTo: (state, action) => {
      state.mileageTo = action.payload;
    },
    resetFilters: (state) => {
      state.brand = "";
      state.price = "";
      state.mileageFrom = "";
      state.mileageTo = "";
    },
  },
});

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
