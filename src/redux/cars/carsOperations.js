import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, ...filters }, thunkAPI) => {
    try {
      const cleanedParams = Object.entries({ page, limit, ...filters }).reduce(
        (acc, [key, value]) => {
          const isObject = typeof value === "object" && value !== null;
          const isEmptyObject = isObject && Object.keys(value).length === 0;

          if (value !== null && value !== "" && !isEmptyObject) {
            acc[key] = value;
          }

          return acc;
        },
        {}
      );
      const response = await instance.get("/cars", { params: cleanedParams });

      return response.data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = async (id) => {
  try {
    const response = await instance.get(`/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch car by ID:", error);
    throw error;
  }
};

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = async () => {
  const res = await axios.get("https://car-rental-api.goit.global/brands");
  return res.data;
};
