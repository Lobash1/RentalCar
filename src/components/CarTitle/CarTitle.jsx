import css from "./CarTitle.module.css";

export default function CarTitle({
  brand,
  model,
  year,
  mileage,
  description,
  address,
  rentalPrice,
  id,
}) {
  const parts = address.split(", ");
  const cityCountry = parts.slice(-2).join(", ");

  return (
    <div className={css.detalis}>
      <div className={css.title}>
        <div className={css.nameBlok}>
          <h3 className={css.name}>
            {brand} {model}, {year}
          </h3>
          <span className={css.id}>id:{id.slice(-4)}</span>
        </div>

        <div className={css.menuLocation}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/icomoon.svg#icon-Group" />
          </svg>
          <div>
            <p className={css.city}>
              {cityCountry}
              <span className={css.mileage}>
                mileage:
                {Number(mileage).toLocaleString("en-US").replace(/,/g, " ")}
                km
              </span>
            </p>
          </div>
        </div>

        <p className={css.price}>${rentalPrice}</p>
      </div>
      <p className={css.text}>{description}</p>
    </div>
  );
}
