import css from "./CarDescriptionBlock.module.css";
import SpecificationsBlock from "../SpecificationsBlock/SpecificationsBlock.jsx";
import CarExtrasBlock from "../CarExtrasBlock/CarExtrasBlock.jsx";

export default function CarDescriptionBlock({ rentalConditions, car }) {
  return (
    <div className={css.descriptions}>
      {/* div1 */}
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
      {/* div2 */}
      <SpecificationsBlock
        specs={{
          year: car.year,
          type: car.type,
          fuelConsumption: car.fuelConsumption,
          engineSize: car.engineSize,
        }}
      />
      {/* div3 */}
      <CarExtrasBlock
        accessories={car.accessories}
        functionalities={car.functionalities}
      />
    </div>
  );
}
