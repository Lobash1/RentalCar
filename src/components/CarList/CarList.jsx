import { useEffect, useState } from "react";
import css from "./CarList.module.css";
import { temp } from "../../api/temp.js";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton.jsx";
import CarCard from "../CarCard/CarCard.jsx";
import Loader from "../Loader/Loader.jsx";

import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/filtersSelector.js";

export default function CarList() {
  const filters = useSelector(selectFilters);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPage(1);
    setCars([]);
    setHasMore(true);
  }, [filters]);

  useEffect(() => {
    const loadCars = async () => {
      setIsLoading(true);

      try {
        const data = await temp(page, 12);
        const carsArray = data.cars || [];
        const filtered = carsArray.filter((car) => {
          const brand = filters.brand?.trim() || "";
          const price = filters.price;
          const mileageFrom = filters.mileageFrom;
          const mileageTo = filters.mileageTo;

          const matchesBrand = brand
            ? car.brand.toLowerCase() === brand.toLowerCase()
            : true;

          const rentalPrice =
            typeof car.rentalPrice === "string"
              ? parseInt(car.rentalPrice.replace(/\D/g, ""))
              : car.rentalPrice;

          const matchesPrice = price ? rentalPrice <= Number(price) : true;

          const matchesMileageFrom = mileageFrom
            ? car.mileage >= Number(mileageFrom)
            : true;

          const matchesMileageTo = mileageTo
            ? car.mileage <= Number(mileageTo)
            : true;

          return (
            matchesBrand &&
            matchesPrice &&
            matchesMileageFrom &&
            matchesMileageTo
          );
        });
        // console.log("Raw cars from API:", carsArray);
        // console.log("Filtered cars:", filtered);
        if (page === 1) {
          setCars(filtered);
        } else {
          setCars((prev) => [...prev, ...filtered]);
        }

        if (filtered.length < 12) {
          setHasMore(false);
        }

        if (page > 1) {
          setTimeout(() => {
            window.scrollBy({ top: 500, behavior: "smooth" });
          }, 100);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCars();
  }, [page, filters]);

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
      {!isLoading && !hasMore && cars.length === 0 && (
        <p className={css.empty}>No cars found for selected filters.</p>
      )}
    </div>
  );
}
