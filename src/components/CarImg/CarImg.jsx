import css from "./CarImg.module.css";

export default function CarImg({ image }) {
  return <img className={css.img} src={image} alt="Car Preview" />;
}
