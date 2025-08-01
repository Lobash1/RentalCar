import Hero from "../../components/HeroSection/HeroSection.jsx";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/carsOperations.js";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12, filters: {} }));
  }, [dispatch]);
  return (
    <div>
      <Hero />
    </div>
  );
}
