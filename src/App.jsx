import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import CarDetalisPage from "./pages/CarDetalisPage/CarDetalisPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarDetalisPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
