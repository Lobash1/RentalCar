import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstance.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12 } = {}, thunkAPI) => {
    try {
      const response = await instance.get("/cars");
      const cars = response.data.cars || [];

      const { brand, price, mileage } = thunkAPI.getState().filters;

      const filteredCars = cars.filter((car) => {
        const rawPriceStr = car.rentalPrice;
        const rawPrice = Number(rawPriceStr.replace("$", ""));

        const priceMatch =
          !price || (!isNaN(rawPrice) && rawPrice <= Number(price));

        const brandMatch = brand
          ? car.brand?.toLowerCase() === brand.toLowerCase()
          : true;

        const validMin =
          typeof mileage.minMileage === "number" && !isNaN(mileage.minMileage);

        const validMax =
          typeof mileage.maxMileage === "number" && !isNaN(mileage.maxMileage);

        const mileageMatch =
          (validMin ? car.mileage >= mileage.minMileage : true) &&
          (validMax ? car.mileage <= mileage.maxMileage : true);

        return brandMatch && priceMatch && mileageMatch;
      });

      // Постраничный вывод
      const start = (page - 1) * limit;
      const paginatedCars = filteredCars.slice(start, start + limit);

      console.log("💰 price", price);

      return {
        cars: paginatedCars,
        page,
        totalCars: filteredCars.length,
        limit,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../api/axiosInstance.js";

// export const fetchCars = createAsyncThunk(
//   "cars/fetchCars",
//   async ({ page = 1, limit = 12 } = {}, thunkAPI) => {
//     try {
//       const { brand, price, mileage } = thunkAPI.getState().filters;

//       const params = {
//         page,
//         limit,
//       };

//       if (brand) params.make = brand;
//       if (price) params.rentalPrice = price;
//       if (mileage?.minMileage) params.minMileage = mileage.minMileage;
//       if (mileage?.maxMileage) params.maxMileage = mileage.maxMileage;

//       const response = await instance.get("/cars", { params });

//       return {
//         cars: response.data,
//         page,
//         totalCars: response.data.length, // возможно нужно будет уточнить
//         limit,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
