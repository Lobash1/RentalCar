import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CarDetalisPage = lazy(() =>
  import("./pages/CarDetalisPage/CarDetalisPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetalisPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
