import instance from "./axiosInstance.js";

export const temp = async (page = 1, limit = 12) => {
  const { data } = await instance.get("/cars", {
    params: { page, limit },
  });
  return data;
};

export const getCarById = async (id) => {
  const { data } = await instance.get(`/cars/${id}`);
  return data;
};
