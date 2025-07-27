import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { selectFilters } from "../filters/filtersSelector.js";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/cars");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
