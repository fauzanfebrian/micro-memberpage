import axios from "./index";

const setHeaderAuthorization = (token = null) => {
  if (token) axios.defaults.headers.common.Authorization = token;
  else delete axios.defaults.headers.common.Authorization;
};

export default setHeaderAuthorization;
