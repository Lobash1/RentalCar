import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import Container from "../../components/Container/Container.jsx";

export default function CatalogPage() {
  return (
    <Container>
      <FilterPanel />
      <CarList />
    </Container>
  );
}
