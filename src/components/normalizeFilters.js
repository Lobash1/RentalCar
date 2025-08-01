export function normalizeFilters(filters) {
  const params = {};

  if (filters.brand) {
    params.brand = filters.brand;
  }

  if (filters.rentalPrice) {
    params.rentalPrice = filters.rentalPrice;
  }

  if (filters.mileage?.minMileage) {
    params.minMileage = Number(filters.mileage.minMileage);
  }

  if (filters.mileage?.maxMileage) {
    params.maxMileage = Number(filters.mileage.maxMileage);
  }

  return params;
}
