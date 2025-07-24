import instance from "./axiosInstance.js";

export const carsAPI = async (page = 1, limit = 12) => {
  const { data } = await instance.get("/cars", {
    params: { page, limit },
  });
  return data;
};
