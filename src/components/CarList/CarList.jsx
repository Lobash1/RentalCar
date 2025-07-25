import { useEffect, useState } from "react";
import css from "./CarList.module.css";
import { temp } from "../../api/temp.js";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton.jsx";
import CarCard from "../CarCard/CarCard.jsx";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await temp(page, 12);

        if (page === 1) {
          setCars(data.cars);
        } else {
          setCars((prev) => [...prev, ...data.cars]);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    loadCars();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {cars.map((car, index) => (
          <CarCard key={`${car.id}-${index}`} car={car} />
        ))}
      </ul>
      <LoadMoreButton onClick={handleLoadMore} />
    </div>
  );
}
