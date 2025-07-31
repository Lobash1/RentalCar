import css from "./FilterPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setFilterBrand,
  setFilterPrice,
  setFilterMileage,
} from "../../redux/filters/filtersSlice.js";
import { getBrands, fetchCars } from "../../redux/cars/carsOperations.js";
import { resetCars } from "../../redux/cars/carsSlice.js";
import { selectPriceFilterOptions } from "../../redux/cars/carsSelector.js";
import { selectFilters } from "../../redux/filters/filtersSelector.js";
import { normalizeFilters } from "../normalizeFilters.js";

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const priceFilter = useSelector(selectPriceFilterOptions);

  // const cars = useSelector((state) => state.cars.items) || [];
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function loadBrands() {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (err) {
        console.error("Brand fetch error", err);
      }
    }
    loadBrands();
  }, []);

  const handleSearch = () => {
    const normalized = normalizeFilters(filters);
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, ...normalized }));
  };
  console.log("FiltersPanel filters:", filters);

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        {/* Brand */}
        <div className={css.field}>
          <label className={css.label}>
            Choose a brand
            <select
              className={css.select}
              value={filters.brand}
              onChange={(e) => dispatch(setFilterBrand(e.target.value))}
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

        {/* Price */}
        <div className={css.field}>
          <label className={css.label}>
            Price/1 hour
            <select
              className={css.select}
              value={filters.rentalPrice || ""}
              onChange={(e) => dispatch(setFilterPrice(Number(e.target.value)))}
            >
              <option value="">To $</option>
              {priceFilter.map((price) => (
                <option key={price} value={price}>
                  {price}
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
              // type="number"
              // pattern="[0-9]*"
              // inputMode="numeric"
              placeholder="From"
              value={filters.mileage.minMileage || ""}
              onChange={(e) =>
                dispatch(setFilterMileage({ minMileage: e.target.value }))
              }
            />
            <input
              className={css.inputTo}
              type="number"
              // pattern="[0-9]*"
              // inputMode="numeric"
              placeholder="To"
              value={filters.mileage.maxMileage || ""}
              onChange={(e) =>
                dispatch(setFilterMileage({ maxMileage: e.target.value }))
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
