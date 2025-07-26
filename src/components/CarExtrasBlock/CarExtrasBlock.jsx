import css from "./CarExtrasBlock.module.css";

export default function CarExtrasBlock({ accessories, functionalities }) {
  return (
    <div className={css.block}>
      <h3 className={css.title}>Accessories and functionalities:</h3>

      <ul className={css.list}>
        {[...accessories, ...functionalities].map((item, idx) => (
          <li key={idx} className={css.li}>
            <svg className={css.icon} width="16" height="16">
              <use href="/icons/icomoon.svg#icon-ok" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
