import { Input } from "Components";
import { setAuthorization } from "configs/axios";
import { users } from "consts";
import { useForm, fieldErrors } from "helper";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { populateProfile } from "store/actions";

function LoginForm({ history }) {
  const dispatch = useDispatch();
  const [{ email, password }, setForm] = useForm({ password: "", email: "" });
  const [errors, setErrors] = useState(null);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const login = await users.login({
        email,
        password,
      });
      setAuthorization(login.data.token);
      const detail = await users.details();

      dispatch(populateProfile(detail.data));
      localStorage.setItem(
        "BWAMICRO:token",
        JSON.stringify({
          ...login.data,
          email,
        })
      );
      const redirect = localStorage.getItem("BWAMICRO:redirect");
      const userCookie = {
        name: detail.data.name,
        thumbnail: detail.data.avatar,
      };

      fetch(
        `${process.env.REACT_APP_FRONTPAGE_URL}/cookie-set/user?name=${userCookie.name}&thumbnail=${userCookie.thumbnail}`
      )
        .then((res) => history.push(redirect ?? "/"))
        .catch((err) => console.log(err));
    } catch (error) {
      setErrors(error?.response?.data?.message ?? "error");
    }
  };

  const ERRORS = fieldErrors(errors);
  return (
    <div className="flex justify-center py-24">
      <div className="w-3/12">
        <h3 className="text-3xl text-gray-900">
          <span className="font-semibold">Continue</span> Study, <br />
          Finish Your <span className="font-semibold">Goals</span>
        </h3>
        <form onSubmit={onSubmit}>
          <Input
            label="Email Addres"
            placeholder="Your email address"
            className="mt-7"
            type="email"
            value={email}
            name="email"
            onChange={setForm}
            error={ERRORS?.email?.message}
          />
          <Input
            label="Password"
            placeholder="Your password"
            className="mt-4"
            type="password"
            value={password}
            name="password"
            onChange={setForm}
            error={ERRORS?.password?.message}
          />
          <button
            className="w-full  bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-8"
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
      <div className="w-2/12" />
      <div className="w-5/12">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -mr-16 left-0"
            style={{ width: 324, height: 374 }}
          />
          <div className="absolute w-full h-full mb-8 ml-8">
            <img src="/images/il-login.png" alt="Hero" />
          </div>
          <div
            className="-mb-8 -mr-28 absolute bg-white bottom-0 px-4 py-3 right-0 z-10"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Semua sudah terarah dengan baik dan perlu ikuti saja
            </p>
            <span className="text-gray-600">Alyssa, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(LoginForm);
