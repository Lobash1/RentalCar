import axios from "axios";
import { temp } from "../../api/temp.js";
import instance from "../../api/axiosInstance.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, ...filters }, thunkAPI) => {
    console.log("FetchCars params:", { page, limit, ...filters });
    try {
      const params = { page, limit, ...filters };
      const response = await instance.get("/cars", { params });
      return response.data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "filters/fetchMake",
  async (_, thunkAPI) => {
    try {
      const { data } = await temp.get(
        "https://car-rental-api.goit.global/cars/brand"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = async () => {
  const response = await axios.get("https://car-rental-api.goit.global/brands");
  return response.data;
};
