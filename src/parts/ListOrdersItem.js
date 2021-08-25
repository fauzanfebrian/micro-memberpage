import { formatDate, formatThousand } from "helper";
import React from "react";
import { Link } from "react-router-dom";

export default function ListOrdersItem({ data }) {
  return (
    <div className="flex justify-between items-center -mx-4 mt-5" key={data.id}>
      <div className="w-auto px-4" style={{ width: 150 }}>
        <img
          src={data?.metadata?.course_thumbnail ?? ""}
          alt={data?.metadata?.course_name ?? "Class name"}
        />
      </div>
      <div className="px-4 w-3/12">
        <h6 className="text-gray-900 text-lg">
          {data?.metadata?.course_name ?? "Class name"}
        </h6>
        <p className="text-gray-600">
          {data?.metadata?.course_level ?? "status"}
        </p>
      </div>
      <div className="px-4 w-2/12">
        <h6 className="text-gray-900 text-lg">
          Rp. {formatThousand(data?.metadata?.course_price ?? 0)}
        </h6>
      </div>
      <div className="px-4 w-2/12">
        <h6 className="text-gray-900 text-lg">
          {data?.created_at ? formatDate(data?.created_at) : "-"}
        </h6>
      </div>
      <div className="w-3/12 px-4  flex justify-center items-center">
        {data?.status === "pending" && (
          <Link
            to={`/joined/${data?.course_id}`}
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
          >
            Lunasi
          </Link>
        )}
        {data?.status === "success" && (
          <Link
            to={`/courses/${data?.course_id}`}
            className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-gray-900 px-6 py-3"
          >
            Lihat Kelas
          </Link>
        )}
      </div>
    </div>
  );
}
