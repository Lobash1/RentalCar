import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./fovourites/fovouritesSlice.js";

import carsReducer from "./cars/carsSlice.js";
import filtersReducer from "./filters/filtersSlice.js";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
