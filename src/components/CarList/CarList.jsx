import { useEffect, useState } from "react";
import css from "./CarList.module.css";
import { temp } from "../../api/temp.js";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton.jsx";
import CarCard from "../CarCard/CarCard.jsx";
import Loader from "../Loader/Loader.jsx";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      setIsLoading(true);
      try {
        const data = await temp(page, 12);

        if (page === 1) {
          setCars(data.cars);
        } else {
          setCars((prev) => [...prev, ...data.cars]);
        }

        if (page > 1) {
          setTimeout(() => {
            window.scrollBy({
              top: 500,
              behavior: "smooth",
            });
          }, 100);
        }

        if (data.cars.length < 12) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setIsLoading(false);
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
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>

      {isLoading && <Loader />}

      {!isLoading && hasMore && <LoadMoreButton onClick={handleLoadMore} />}
    </div>
  );
}
