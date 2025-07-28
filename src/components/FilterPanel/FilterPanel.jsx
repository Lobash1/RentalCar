import css from "./FilterPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
} from "../../redux/filters/filtersSlice.js";
import { fetchCars } from "../../redux/cars/carsOperations.js";

export default function FiltersPanel() {
  const dispatch = useDispatch();

  const { brand, price, mileageFrom, mileageTo } = useSelector(
    (state) => state.filters
  );

  const prices = [30, 40, 50, 60, 70, 80, 90, 100, 150, 200];

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "brand":
        dispatch(setBrand(value));
        break;
      case "price":
        dispatch(setPrice(value));
        break;
      case "mileageFrom":
        dispatch(setMileageFrom(value));
        break;
      case "mileageTo":
        dispatch(setMileageTo(value));
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    dispatch(fetchCars());
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
              value={brand}
              onChange={handleChange}
            >
              <option className={css.options} value="">
                All brands
              </option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
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
              value={price}
              onChange={handleChange}
            >
              <option value="">Any price</option>
              {prices.map((p) => (
                <option key={p} value={p}>
                  Up to ${p}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* ========================== */}

        <div className={css.fieldMile}>
          <label className={css.label}>Car mileage/km </label>

          <div className={css.mileage}>
            <input
              className={css.inputFrom}
              type="number"
              name="mileageFrom"
              placeholder="From"
              value={mileageFrom}
              onChange={handleChange}
            />

            <input
              className={css.inputTo}
              type="number"
              name="mileageTo"
              placeholder="To"
              value={mileageTo}
              onChange={handleChange}
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
