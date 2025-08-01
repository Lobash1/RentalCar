import css from "./HeroSection.module.css";
import Container from "../Container/Container.jsx";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/cars/carsSelector.js";

export default function HeroSection() {
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return (
      <div className={css.loaderWrapper}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={css.content}>
      <Container>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <h2 className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link to="/catalog" className={css.btn}>
          View Catalog
        </Link>
      </Container>
    </div>
  );
}
