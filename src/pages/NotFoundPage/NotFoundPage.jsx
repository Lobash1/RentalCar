import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404</h1>
      <p className={css.message}>Page not found</p>
      <Link to="/" className={css.button}>
        To the main page
      </Link>
    </div>
  );
}
