import css from "./CarDescriptionBlock.module.css";

export default function CarDescriptionBlock({ rentalConditions }) {
  return (
    <div className={css.descriptions}>
      <div className={css.rentalConditions}>
        <h3 className={css.title}>Rental Conditions:</h3>
        <ul className={css.list}>
          {rentalConditions.map((condition, index) => (
            <li className={css.li} key={index}>
              <svg className={css.icon} width="16" height="16">
                <use href="/icons/icomoon.svg#icon-ok" />
              </svg>
              <span className={css.text}>{condition}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
