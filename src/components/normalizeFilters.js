export const normalizeFilters = (filters) => {
  const minMileageRaw = filters.mileage?.minMileage ?? "";
  const maxMileageRaw = filters.mileage?.maxMileage ?? "";

  const mileageFrom = Number(minMileageRaw);
  const mileageTo = Number(maxMileageRaw);

  return {
    brand: filters.brand || undefined,
    rentalPrice: filters.rentalPrice || undefined,
    mileageFrom:
      minMileageRaw !== "" && !isNaN(mileageFrom) ? mileageFrom : undefined,
    mileageTo:
      maxMileageRaw !== "" && !isNaN(mileageTo) ? mileageTo : undefined,
  };
};
