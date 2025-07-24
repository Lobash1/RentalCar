import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton.jsx";
import Container from "../../components/Container/Container.jsx";

// Pagination

export default function CatalogPage() {
  return (
    <Container>
      <FilterPanel />
      <CarList />
      <LoadMoreButton />
      <h1>CatalogPage</h1>
    </Container>
  );
}

// ┌────────────────────────────────────────────────────┐
// │                   CatalogPage                      │
// ├────────────────────────────────────────────────────┤
// │  FilterPanel                                       │
// │  ┌──────────────────────────────────────────────┐  │
// │  │  Brand dropdown   Price dropdown  Mileage    │  │
// │  │  [Tesla ▾]        [To $100 ▾]     [50000-... ]│  │
// │  └──────────────────────────────────────────────┘  │
// ├────────────────────────────────────────────────────┤
// │                  CarList                           │
// │  ┌────────────┐ ┌────────────┐ ┌────────────┐     │
// │  │  CarCard   │ │  CarCard   │ │  CarCard   │     │
// │  │ [Photo]    │ │ [Photo]    │ │ [Photo]    │     │
// │  │ Tesla X    │ │ BMW i3     │ │ Audi Q5    │     │
// │  └────────────┘ └────────────┘ └────────────┘     │
// │                                                   │
// │  ... (more cards, 12 per page)                    │
// ├────────────────────────────────────────────────────┤
// │                  LoadMoreBtn                      │
// │          [ Load more ] (по центру)                │
// └────────────────────────────────────────────────────┘
