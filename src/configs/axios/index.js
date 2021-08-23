import axios from "axios";
import errorHandler from "./errorHandler";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

instance.interceptors.response.use((res) => res.data, errorHandler);

export { default as setAuthorization } from "./setHeaderAuthorization";
export default instance;
