import { ICPlay } from "assets/images";
import React from "react";
import { Link } from "react-router-dom";

export default function ListClassItem({ data }) {
  return (
    <div className="w-1/4 px-4 item relative mb-3">
      <figure className="item-image">
        <ICPlay />
        <img
          src={data?.course?.thumbnail ?? ""}
          alt={`${data?.course?.name ?? "Name"}`}
          style={{ height: 170, width: "100%" }}
        />
      </figure>
      <h4 className="text-lg text-gray-900 mt-3 capitalize">
        {data?.course?.name ?? "Course Name"}
      </h4>
      <h3 className="text-gray-600 capitalize">
        {data?.course?.level ?? "course level"}
      </h3>
      <Link
        to={`/courses/${data?.course?.id ?? ""}`}
        className="link-wrapped"
      />
    </div>
  );
}
