import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setFilterBrand,
  setFilterPrice,
  setFilterMileage,
  resetFilters,
} from "../../redux/filters/filtersSlice.js";
import { selectFilters } from "../../redux/filters/filtersSelector.js";
import { getBrands, fetchCars } from "../../redux/cars/carsOperations.js";
import { resetCars } from "../../redux/cars/carsSlice.js";
import css from "./FilterPanel.module.css";
import { normalizeFilters } from "../normalizeFilters.js";

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const cars = useSelector((state) => state.cars.items) || [];

  const [brands, setBrands] = useState([]);

  const priceOptions = [
    ...new Set(
      cars
        .filter((car) => car.rentalPrice !== undefined)
        .map((car) => car.rentalPrice)
    ),
  ].sort((a, b) => a - b);

  useEffect(() => {
    async function loadBrands() {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error("Failed to load brands:", error);
      }
    }
    loadBrands();
  }, []);

  const handleSearch = () => {
    const normalized = normalizeFilters(filters);
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, limit: 12, ...normalized }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, limit: 12, filters: {} }));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        <div className={css.field}>
          <label className={css.label}>
            Car brand
            <select
              className={css.select}
              id="brand-select"
              name="brand"
              value={filters.brand}
              onChange={(e) => dispatch(setFilterBrand(e.target.value))}
            >
              <option value="">Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Price */}
        <div className={css.field}>
          <label className={css.label}>
            Price/ 1 hour
            <select
              className={css.select}
              id="price-select"
              name="price"
              value={filters.rentalPrice || ""}
              onChange={(e) => dispatch(setFilterPrice(Number(e.target.value)))}
            >
              <option value="">
                {filters.rentalPrice
                  ? `Choose a price${Number(
                      filters.rentalPrice
                    ).toLocaleString()}`
                  : "Choose a price"}
              </option>
              {priceOptions.map((price) => (
                <option key={price} value={price}>
                  ${Number(price).toLocaleString()}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Mileage */}
        <div className={css.fieldMile}>
          <label className={css.label}>Car mileage/km</label>
          <div className={css.mileage}>
            <input
              className={css.inputFrom}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="From"
              value={
                filters.mileage.minMileage
                  ? `From ${Number(
                      filters.mileage.minMileage
                    ).toLocaleString()}`
                  : ""
              }
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9]/g, "");
                dispatch(setFilterMileage({ minMileage: raw }));
              }}
            />
            <input
              className={css.inputTo}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="To"
              value={
                filters.mileage.maxMileage
                  ? `To ${Number(filters.mileage.maxMileage).toLocaleString()}`
                  : ""
              }
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9]/g, "");
                dispatch(setFilterMileage({ maxMileage: raw }));
              }}
            />
          </div>
        </div>

        <button className={css.btn} type="button" onClick={handleSearch}>
          Search
        </button>

        <button className={css.btnReset} type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
