import React from "react";

export default function Empty({ transaction }) {
  return (
    <section className="flex items-center h-screen">
      <div className="text-center py-12 mx-auto w-5/12">
        <img
          src="/images/il-dashboard.jpg"
          alt="oops we lost"
          className="-mt-10"
        />
        <h1 className="text-3xl text-gray-900 mt-12">Time to invest</h1>
        <p className="text-lg text-gray-600 mt-4 text-center mx-auto mb-8">
          It seems you don’t have any{" "}
          {transaction
            ? "transaction"
            : "class yet so let’s get them and grow your skills"}
        </p>
        <a
          href={`${process.env.REACT_APP_FRONTPAGE_URL}/library`}
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cari kelas
        </a>
      </div>
    </section>
  );
}
