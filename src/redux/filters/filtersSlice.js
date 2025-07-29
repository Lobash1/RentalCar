import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: null,
  mileage: {
    minMileage: "",
    maxMileage: "",
  },
  page: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
      state.page = 1;
    },
    setPrice(state, action) {
      state.price = action.payload;
      state.page = 1;
    },
    setMileage(state, action) {
      state.mileage = {
        ...state.mileage,
        ...action.payload,
      };
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setBrand, setPrice, setMileage, setPage, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
