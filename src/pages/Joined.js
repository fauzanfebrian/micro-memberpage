import { courses } from "consts";
import { Loading } from "parts";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ServerError from "./500";

function Joined({ history, match }) {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    data: {},
  });

  useEffect(() => {
    courses
      .detail(match.params.class)
      .then((res) => setState({ isLoading: false, isError: false, data: res }))
      .catch((err) => {
        console.log(err);
        setState({ isLoading: false, isError: true, data: null });
      });
  }, [match.params.class, setState]);

  const joining = async () => {
    try {
      await courses.join(match.params.class);
      await history.push(`courses/${match.params.class}`);
    } catch (error) {
      if (error?.response?.data?.message === "user already take this course")
        history.push(`courses/${match.params.class}`);
    }
  };

  if (state.isLoading) return <Loading />;
  if (state.isError) return <ServerError />;
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <img src="/images/il-welcome.jpg" alt="welcome to class" />
      <h1 className="text-3xl text-gray-900 mt-12">Welcome to Class</h1>
      <p className="text-lg text-gray-600 mt-4 text-center lg:w-3/12 xl:2/12 mx-auto mb-8">
        You have successfully joined our{" "}
        <span className="text-gray-900">
          {state?.data?.name ?? "Class Name"}
        </span>{" "}
        class
      </p>
      <span
        onClick={joining}
        className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 cursor-pointer"
      >
        Start Learn
      </span>
    </section>
  );
}

export default withRouter(Joined);
