import React from "react";
import { Link } from "react-router-dom";

export default function Congratulations({ data }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <img
        src={data?.metadata?.course_thumbnail}
        alt="welcome to class"
        style={{ width: 350 }}
      />
      <h1 className="text-3xl text-gray-900 mt-12">Congratulations</h1>
      <p className="text-lg text-gray-600 mt-4 text-center lg:w-3/12 xl:2/12 mx-auto mb-8">
        You have successfully joined our{" "}
        <span className="text-gray-900">
          {data?.metadata?.course_name ?? "Class Name"}
        </span>{" "}
        class
      </p>
      <Link
        to={`/courses/${data?.course_id}`}
        className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 cursor-pointer"
      >
        Start Learn
      </Link>
    </section>
  );
}
