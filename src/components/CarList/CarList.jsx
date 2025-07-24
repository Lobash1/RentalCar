import { carsApi } from "../../api/carsApi.js";
import CarCard from "../CarCard/CarCard.jsx";
import { useEffect, useState } from "react";
import css from "./CarList.module.css";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await carsApi(page);

        setCars((prev) => [...prev, ...data.cars]);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    loadCars();
  }, [page]);

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {cars.map((car, index) => (
          <CarCard key={`${car.id}-${index}`} car={car} />
        ))}
      </ul>

      <button className={css.btn} onClick={() => setPage((prev) => prev + 1)}>
        Load More
      </button>
    </div>
  );
}
