import css from "./CarDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../../api/temp.js";
import Loader from "../Loader/Loader.jsx";
import CarImg from "../CarImg/CarImg.jsx";
import Container from "../Container/Container.jsx";
import CarTitle from "../CarTitle/CarTitle.jsx";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const data = await getCarById(id);
        // console.log("cad data:", data);
        setCar(data);
      } catch (error) {
        console.error("Error loading cat", error);
      }
    };

    fetchCar();
  }, [id]);

  if (!car) return <Loader />;

  return (
    <Container>
      <div className={css.cardDelalis}>
        <div className={css.imgForm}></div>
        <CarImg image={car.img} />
        <CarTitle
          brand={car.brand}
          model={car.model}
          year={car.year}
          mileage={car.mileage}
          description={car.description}
          address={car.address}
          rentalPrice={car.rentalPrice}
          mileage={car.mileage}
        />
      </div>
    </Container>
  );
}
