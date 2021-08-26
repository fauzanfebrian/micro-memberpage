import { DefaultAvatar } from "assets/images";
import { Input, Select } from "Components";
import { media, users } from "consts";
import { fieldErrors, useForm } from "helper";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { populateProfile } from "store/actions";
import { image2base64 } from "utils";
function SettingForm() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const DETAILS = useSelector((state) => state.users);

  const addPicture = useRef(null);
  const [state, setKey, setState] = useForm({
    name: DETAILS?.name ?? "",
    avatar: DETAILS?.avatar ?? "",
    email: DETAILS?.email ?? "",
    password: "",
    profession: DETAILS?.profession ?? "",
    otherProfession: "",
  });
  const previewImage = async (e) => {
    try {
      e.persist();
      const image = await image2base64(e.target.files[0]);
      setKey({
        target: {
          name: e.target.name,
          value: image,
        },
      });
    } catch (error) {}
  };

  const submit = async (e) => {
    try {
      e.preventDefault();

      const payload = {
        name: state.name,
        email: state.email,
        profession:
          state.profession === "Others"
            ? state.otherProfession
            : state.profession,
      };
      if (state.password) payload.password = state.password;
      if (state.avatar.indexOf("base64") > -1) {
        const avatar = await media.upload(state.avatar);
        payload.avatar = avatar.data.image;
      }

      const updated = await users.update(payload);
      await toast.success("Profile updated");
      await setState({ ...state, password: "" });
      await setErrors(null);
      await dispatch(
        populateProfile({
          ...DETAILS,
          ...updated.data,
        })
      );
    } catch (error) {
      setErrors(error?.response?.data?.message ?? "errors");
    }
  };

  const ERRORS = fieldErrors(errors);
  return (
    <>
      <section className="flex flex-col mt-8">
        <div className="flex justify-start items-center -mx-5">
          <div className="w-auto text-center px-5">
            <div className="rounded-full overflow-hidden w-24 h-24">
              {state.avatar ? (
                <img
                  src={state.avatar}
                  alt={state.name}
                  className="rounded-full object-cover"
                  style={{ width: 90, height: 90 }}
                />
              ) : (
                <DefaultAvatar
                  className="fill-indigo-500"
                  style={{ width: 90, height: 90 }}
                />
              )}
            </div>
          </div>
          <div className="w-full flex flex-col">
            <span className="text-gray-600">Add your picture...</span>
            <div>
              <input
                type="file"
                name="avatar"
                ref={addPicture}
                className="hidden"
                onChange={previewImage}
              />
              <button
                onClick={() => addPicture.current.click()}
                className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-7 py-2 mt-3"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-8">
        <div className="flex items-center pb-24">
          <div className="w-full md:w-4/12">
            <form onSubmit={submit}>
              <Input
                label="Full Name"
                placeholder="Your name"
                className="mb-4"
                type="text"
                value={state.name}
                name="name"
                onChange={setKey}
                error={ERRORS?.name?.message}
              />
              <Input
                label="Email Addres"
                placeholder="Your email address"
                className="mb-4"
                type="email"
                value={state.email}
                name="email"
                onChange={setKey}
                error={ERRORS?.email?.message}
              />
              <Input
                label="Password"
                placeholder="Your password"
                className="mb-4"
                type="password"
                value={state.password}
                name="password"
                onChange={setKey}
                error={ERRORS?.password?.message}
              />
              <Select
                fallbackText="Select your focus"
                onClick={setKey}
                value={state.profession}
                name="profession"
                labelName="Occupation"
              >
                <option value="">Select your focus</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Others">Others</option>
              </Select>
              {state.profession === "Others" && (
                <Input
                  placeholder="Your profession"
                  className="mb-4"
                  type="text"
                  value={state.otherProfession}
                  name="otherProfession"
                  onChange={setKey}
                />
              )}
              <button
                className="w-full  bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-8"
                type="submit"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default withRouter(SettingForm);
