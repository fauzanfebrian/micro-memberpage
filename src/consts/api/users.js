import { axios } from "configs";

const users = {
  login: (credentials) => axios.post("/users/login", credentials),
  refresh: ({ email, refresh_token }) =>
    axios.post("/refresh-tokens", { email, refresh_token }),
  register: (payload) => axios.post("/users/register", payload),
  details: () => axios.get("/users"),
  update: (credentials) => axios.put("/users", credentials),
  logout: () => axios.post("/users/logout"),
};

export default users;
