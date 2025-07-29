import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12 } = {}, thunkAPI) => {
    try {
      const { brand, price, mileage } = thunkAPI.getState().filters;

      // Формируем параметры запроса для API
      const params = {
        page,
        limit,
      };

      if (brand) params.brand = brand;
      // Если API поддерживает фильтрацию по цене, добавляем параметр, например:
      if (price) params.maxPrice = price; // Проверь в API точное имя параметра!

      // Если API поддерживает фильтрацию по пробегу, добавим:
      // Здесь пример для minMileage и maxMileage — проверь имена параметров!
      if (mileage.minMileage) params.minMileage = mileage.minMileage;
      if (mileage.maxMileage) params.maxMileage = mileage.maxMileage;

      const response = await instance.get("/cars", { params });

      // Предположим, что API возвращает данные примерно так:
      // { cars: [...], totalPages: X, totalItems: Y }

      const { cars = [], totalPages = 1, totalItems = 0 } = response.data;

      return {
        cars,
        page,
        totalCars: totalItems,
        limit,
        totalPages,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
