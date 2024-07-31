import { axiosInstance } from "../request";

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  debugger
  const response = await axiosInstance.post("/api/user/register", data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.post("/api/user/login", data);
  return response.data;
};
