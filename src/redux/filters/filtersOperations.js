import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchBrands = createAsyncThunk(
  "filters/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(
        "https://car-rental-api.goit.global/cars/brand"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
