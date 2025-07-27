import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "./cars/carsSlice.js";
import filtersReducer from "./filters/filtersSlice.js";
import favoritesReducer from "./fovourites/fovouritesSlice.js";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
