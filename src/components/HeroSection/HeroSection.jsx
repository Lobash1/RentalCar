import css from "./HeroSection.module.css";
import Container from "../Container/Container.jsx";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Container>
      <div className={css.content}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <h2 className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link to="/catalog" className={css.btn}>
          View Catalog
        </Link>
      </div>
    </Container>
  );
}
