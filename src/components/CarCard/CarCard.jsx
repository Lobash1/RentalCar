import { useState } from "react";
import css from "./CarCard.module.css";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  const {
    mileage,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
  } = car;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <li className={css.card}>
      <div className={css.imgWrapper}>
        <div className={css.divCard}>
          <img className={css.image} src={img} alt={`${brand} ${model}`} />
          <button
            className={`${css.favorite} ${isFavorite ? css.active : ""}`}
            onClick={handleToggleFavorite}
            aria-label="Toggle favorite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={css.heartIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 7.8a5.751 5.751 0 00-9.678-3.924L12 4.949l-.074-.074a5.751 5.751 0 00-8.13 8.13l.074.074L12 21.75l8.13-8.13.074-.074a5.727 5.727 0 001.548-5.796z"
              />
            </svg>
          </button>
        </div>
        <div className={css.content}>
          <div className={css.titleLine}>
            <h3 className={css.title}>
              {brand}
              <span className={css.model}> {model}</span>, {year}
            </h3>
            <p className={css.price}>{`$${rentalPrice}`}</p>
          </div>
          <p className={css.details}>
            {address.split(", ").slice(1).join("  |  ")} | {rentalCompany} |
          </p>

          <p className={css.details}>
            {type} | {mileage}km
          </p>
        </div>
      </div>
      <Link to={`/catalog/${car.id}`}>
        <button className={css.btn}>Read more</button>
      </Link>
    </li>
  );
}
