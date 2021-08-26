import React from "react";
import { Link } from "react-router-dom";

export default function Unauthenticated({
  external,
  fallbackUrl,
  fallbackText,
}) {
  return (
    <section className="h-screen justify-center flex flex-col items-center px-4">
      <img
        src="/images/il-security.jpg"
        alt="you are not supposed here, please login"
        className="-mt-8"
      />
      <h1 className="text-3xl text-gray-900 mt-12 text-center">
        Wow! How are you here?
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center lg:w-3/12 xl:2/12 mx-auto mb-8">
        Seems like you do not have access for this page. We are sorry.
      </p>
      {external ? (
        <a
          href={fallbackUrl}
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
        >
          {fallbackText || "Logging me in"}
        </a>
      ) : (
        <Link
          to={fallbackUrl || "/login"}
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
        >
          {fallbackText || "Logging me in"}
        </Link>
      )}
    </section>
  );
}
