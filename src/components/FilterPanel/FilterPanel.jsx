import css from "./FilterPanel.module.css";
import Container from "../Container/Container";

import { useDispatch } from "react-redux";
// import {
//   selectBrand,
//   selectPrice,
//   selectMileage,
// } from "../../redux/filters/filtersSelector.js";
import {
  setBrand,
  setPrice,
  setMileage,
  setPage,
} from "../../redux/filters/filtersSlice.js";
import { resetCars } from "../../redux/cars/carsSlice.js";
import { useState } from "react";

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
const prices = ["30", "40", "50", "60", "70", "80", "90"];

// import { useEffect, useState } from "react";
// import { temp } from "../../api/temp.js";
// import { resetCars } from "../../redux/cars/carsSlice.js";

export default function FiltersPanel() {
  const dispatch = useDispatch();

  const [localBrand, setLocalBrand] = useState("");
  const [localPrice, setLocalPrice] = useState("");
  const [localMileage, setLocalMileage] = useState({
    minMileage: "",
    maxMileage: "",
  });

  const handleSearch = () => {
    dispatch(setBrand(localBrand));
    dispatch(setPrice(localPrice || null));
    dispatch(
      setMileage({
        minMileage: localMileage.minMileage
          ? Number(localMileage.minMileage)
          : null,
        maxMileage: localMileage.maxMileage
          ? Number(localMileage.maxMileage)
          : null,
      })
    );

    dispatch(setPage(1));
    dispatch(resetCars());
  };

  return (
    // <Container>
    <div className={css.wrapper}>
      <div className={css.grid}>
        {/* brand */}
        <div className={css.field}>
          <label className={css.label}>
            Choose a brand
            <select
              className={css.select}
              name="brand"
              value={localBrand}
              onChange={(e) => setLocalBrand(e.target.value)}
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
              value={localPrice}
              onChange={(e) => setLocalPrice(Number(e.target.value) || "")}
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
              value={localMileage.minMileage}
              onChange={(e) =>
                setLocalMileage({
                  ...localMileage,
                  minMileage: e.target.value,
                })
              }
            />
            <input
              className={css.inputTo}
              type="number"
              name="mileageTo"
              placeholder="To"
              value={localMileage.maxMileage}
              onChange={(e) =>
                setLocalMileage({
                  ...localMileage,
                  maxMileage: e.target.value,
                })
              }
            />
          </div>
        </div>

        <button className={css.btn} type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
    // </Container>
  );
}
