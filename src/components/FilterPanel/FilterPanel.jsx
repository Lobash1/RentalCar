import css from "./FilterPanel.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectBrand,
  selectPrice,
  selectMileage,
} from "../../redux/filters/filtersSelector.js";
import {
  setBrand,
  setPrice,
  setMileage,
  setPage,
} from "../../redux/filters/filtersSlice.js";
import { resetCars } from "../../redux/cars/carsSlice.js";

const brands = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
  "Hyundai",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lincoln",
  "MINI",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Pontiac",
  "Subaru",
  "Volvo",
];
const prices = [30, 40, 50, 60, 70, 80, 90, 100, 150, 200];

// import { useEffect, useState } from "react";
// import { temp } from "../../api/temp.js";
// import { resetCars } from "../../redux/cars/carsSlice.js";

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const brand = useSelector(selectBrand) ?? "";
  const price = useSelector(selectPrice);
  const mileage = useSelector(selectMileage);

  // const filters = useSelector(selectFilters);

  // const cars = useSelector((state) => state.cars.items) || [];

  // const [brands, setBrands] = useState([]);
  // const [page, setPage] = useState(1);

  // const priceOptions = [
  //   ...new Set(
  //     cars
  //       .filter((car) => car.rentalPrice !== undefined)
  //       .map((car) => Number(car.rentalPrice?.replace("$", "")))
  //   ),
  // ].sort((a, b) => a - b);

  // useEffect(() => {
  //   async function loadBrands() {
  //     try {
  //       const data = await temp(); // масив авто
  //       const uniqueBrands = [...new Set(data.cars.map((car) => car.make))];
  //       setBrands(uniqueBrands);
  //     } catch (error) {
  //       console.error("Failed to load brands:", error);
  //     }
  //   }
  //   loadBrands();
  // }, []);

  const handleSearch = () => {
    dispatch(resetCars());
    dispatch(setPage(1)); // ✅ это вызовет useEffect => fetchCars
  };

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        {/* brand */}
        <div className={css.field}>
          <label className={css.label}>
            Choose a brand
            <select
              className={css.select}
              name="brand"
              value={brand || ""}
              onChange={(e) => dispatch(setBrand(e.target.value))}
            >
              <option value="">All brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* price */}
        <div className={css.field}>
          <label className={css.label}>
            Price/1 hour
            <select
              className={css.select}
              name="price"
              value={price ?? ""}
              onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
            >
              <option value="">To $</option>
              {prices.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* mileage */}
        <div className={css.fieldMile}>
          <label className={css.label}>Car mileage/km</label>
          <div className={css.mileage}>
            <input
              className={css.inputFrom}
              type="number"
              name="mileageFrom"
              placeholder="From"
              value={mileage.minMileage}
              onChange={(e) =>
                dispatch(setMileage({ minMileage: e.target.value }))
              }
            />
            <input
              className={css.inputTo}
              type="number"
              name="mileageTo"
              placeholder="To"
              value={mileage.maxMileage}
              onChange={(e) =>
                dispatch(setMileage({ maxMileage: e.target.value }))
              }
            />
          </div>
        </div>

        <button className={css.btn} type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
