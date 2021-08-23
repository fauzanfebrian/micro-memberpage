import { formatThousand, formatDate } from "helper";
import { Sidebar } from "parts";
import React from "react";
import { useEffect } from "react";

export default function Transactions() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const items = [
    {
      id: "2",
      slug: "3",
      image: "/images/new-class-3.png",
      name: "Good Negotiation",
      levelType: "Beginner",
      price: 500000,
      date: "2020-07-02",
    },
  ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="px-16">
          <section className="flex flex-col mt-8">
            <h1 className="text-4xl text-gray-900 font-medium">Transactions</h1>
            <p className="text-lg text-gray-600">
              Keep on tract what you've invested
            </p>
          </section>
          <section className="flex flex-col mt-8">
            {items?.length > 0
              ? items?.map((item) => (
                  <div
                    className="flex justify-between items-center -mx-4 mt-5"
                    key={item.id}
                  >
                    <div className="w-auto px-4" style={{ width: 150 }}>
                      <img
                        src={item?.image ?? ""}
                        alt={item?.name ?? "Class name"}
                      />
                    </div>
                    <div className="px-4 w-3/12">
                      <h6 className="text-gray-900 text-lg">
                        {item?.name ?? "Class name"}
                      </h6>
                      <p className="text-gray-600">
                        {item?.levelType ?? "Level"}
                      </p>
                    </div>
                    <div className="px-4 w-2/12">
                      <h6 className="text-gray-900 text-lg">
                        Rp. {formatThousand(item?.price ?? 0)}
                      </h6>
                    </div>
                    <div className="px-4 w-2/12">
                      <h6 className="text-gray-900 text-lg">
                        {item?.date ? formatDate(item?.date) : "-"}
                      </h6>
                    </div>
                    <div className="px-4 w-auto">
                      <button className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-7 py-2">
                        Lihat Kelas
                      </button>
                    </div>
                  </div>
                ))
              : "No Transactions"}
          </section>
        </div>
      </div>
    </div>
  );
}
