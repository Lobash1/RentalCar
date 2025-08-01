import { useEffect, useState } from "react";
import css from "./CarCard.module.css";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  const {
    id,
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

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(id));
  }, [id]);

  const handleToggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;

    if (storedFavorites.includes(id)) {
      updatedFavorites = storedFavorites.filter((favId) => favId !== id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...storedFavorites, id];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
              viewBox="0 0 24 24"
              fill="currentColor"
              className={css.heartIcon}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
           2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
           C13.09 3.81 14.76 3 16.5 3 
           19.58 3 22 5.42 22 8.5 
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
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
            {address.split(", ").slice(1).join("  |  ")} | {rentalCompany}
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
