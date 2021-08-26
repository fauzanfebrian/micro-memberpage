import { users } from "consts";
import { toast } from "react-toastify";
import axios, { setAuthorization } from ".";

export default function errorHandler(err) {
  if (err) {
    let message;
    if (err.response) {
      const originalRequest = err.config;
      if (err.response.status === 500)
        message = "Something went terribly wrong";
      else if (err.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const session = localStorage.getItem("BWAMICRO:token")
          ? JSON.parse(localStorage.getItem("BWAMICRO:token"))
          : null;
        return users
          .refresh({
            refresh_token: session.refresh_token,
            email: session.email,
          })
          .then((res) => {
            if (res.data) {
              setAuthorization(res.data.token);
              localStorage.setItem(
                "BWAMICRO:token",
                JSON.stringify({
                  ...session,
                  token: res.data.token,
                })
              );
              originalRequest.headers.Authorization = res.data.token;

              return axios(originalRequest);
            } else {
              localStorage.removeItem("BWAMICRO:token");
              window.location.href = "/login";
            }
          });
      } else if (err?.response?.data?.message === "invalid token") {
        localStorage.removeItem("BWAMICRO:token");
        window.location.href = "/login";
      } else message = err.response.data.message;

      if (typeof message === "string") toast.error(message);

      return Promise.reject(err);
    }
  }
}
