import css from "./SpecificationsBlock.module.css";

export default function SpecificationsBlock({ specs }) {
  return (
    <div className={css.specifications}>
      <h3 className={css.title}>Car Specifications:</h3>

      <ul className={css.list}>
        <li className={css.li}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/icomoon.svg#icon-2" />
          </svg>
          <span className={css.text}>Year: {specs.year}</span>
        </li>

        <li className={css.li}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/icomoon.svg#icon-Group1" />
          </svg>
          <span className={css.text}>Type: {specs.type}</span>
        </li>
        <li className={css.li}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/icomoon.svg#icon-Group3" />
          </svg>
          <span className={css.text}>
            Fuel: {specs.fuelConsumption} L/100km
          </span>
        </li>

        <li className={css.li}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/icomoon.svg#icon-Group2" />
          </svg>
          <span className={css.text}>Engine: {specs.engineSize}</span>
        </li>
      </ul>
    </div>
  );
}
