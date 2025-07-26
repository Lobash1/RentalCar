import css from "./CarTitle.module.css";

export default function CarTitle({
  brand,
  model,
  year,
  mileage,
  description,
  address,
  rentalPrice,
}) {
  //   const address = "123 Example Street, Kiev, Ukraine";
  const parts = address.split(", ");
  const cityCountry = parts.slice(-2).join(", ");

  return (
    <div className={css.detalis}>
      <div className={css.title}>
        <h3 className={css.name}>
          {brand} {model}, {year} <span className={css.id}>id:{mileage}</span>
        </h3>
        <div className={css.det}>
          <div className={css.menuLocation}>
            <svg className={css.icon} width="16" height="16">
              <use href="/icons/icomoon.svg#icon-Group" />
            </svg>
            <div>
              <p className={css.city}>
                {cityCountry}
                <span className={css.mileage}>mileage:{mileage}km</span>
              </p>
              <p className={css.price}>${rentalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <p className={css.text}>{description}</p>
    </div>
  );
}
