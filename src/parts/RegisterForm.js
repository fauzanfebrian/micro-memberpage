import { Input, Select } from "Components";
import { users } from "consts";
import { fieldErrors, useForm } from "helper";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function LoginForm({ history }) {
  const [{ email, password, name, profession, otherProfession }, setForm] =
    useForm({
      password: "",
      email: "",
      name: "",
      profession: "",
      otherProfession: "",
    });
  const [errors, setErrors] = useState(null);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await users.register({
        email,
        password,
        name,
        profession: profession === "Others" ? otherProfession : profession,
      });
      await history.push("/login");
    } catch (error) {
      setErrors(error?.response?.data?.message);
    }
  };

  const ERRORS = fieldErrors(errors);

  return (
    <div className="flex justify-center py-24">
      <div className="w-3/12">
        <h3 className="text-3xl text-gray-900 mb-7">
          <span className="font-semibold">Grow Skills</span> From, <br />
          Anywhere
        </h3>
        <form onSubmit={onSubmit}>
          <Input
            label="Full Name"
            placeholder="Your name"
            className="mb-4"
            type="text"
            value={name}
            name="name"
            onChange={setForm}
            error={ERRORS?.name?.message}
          />
          <Input
            label="Email Addres"
            placeholder="Your email address"
            className="mb-4"
            type="email"
            value={email}
            name="email"
            onChange={setForm}
            error={ERRORS?.email?.message}
          />
          <Input
            label="Password"
            placeholder="Your password"
            className="mb-4"
            type="password"
            value={password}
            name="password"
            onChange={setForm}
            error={ERRORS?.password?.message}
          />
          <Select
            fallbackText="Select your focus"
            onClick={setForm}
            value={profession}
            name="profession"
            labelName="Occupation"
          >
            <option value="">Select your focus</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Web Designer">Web Designer</option>
            <option value="Others">Others</option>
          </Select>
          {profession === "Others" && (
            <Input
              placeholder="Your profession"
              className="mb-4"
              type="text"
              value={otherProfession}
              name="otherProfession"
              onChange={setForm}
            />
          )}
          <button
            className="w-full  bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-8"
            type="submit"
          >
            Daftar
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
            <img src="/images/il-register.png" alt="Hero" />
          </div>
          <div
            className="-mb-8 -mr-28 absolute bg-white bottom-0 px-4 py-3 right-0 z-10"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Semua materi terstruktrur baik dan mentor yang sangat lihai
            </p>
            <span className="text-gray-600">James, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(LoginForm);
