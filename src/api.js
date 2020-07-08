import axios from "axios";

export const createAPI = () => {
  return axios.create({
    baseURL: `https://4.react.pages.academy/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true,
  });
};
