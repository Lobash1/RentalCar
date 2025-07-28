import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} } = {}, thunkAPI) => {
    try {
      // Формируем параметры для запроса
      const params = { page, limit };

      // Добавляем фильтры, если есть
      if (filters.brand) params.brand = filters.brand;
      if (filters.price) params.price = filters.price;
      if (filters.mileage) {
        if (filters.mileage.minMileage)
          params.minMileage = filters.mileage.minMileage;
        if (filters.mileage.maxMileage)
          params.maxMileage = filters.mileage.maxMileage;
      }

      const response = await instance.get("/cars", { params });
      console.log("fetchCars response:", response.data);
      return response.data; // ожидаем объект с cars, page, totalCars, limit
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
