import { orders } from "consts";
import {
  Congratulations,
  Empty,
  ListOrdersItem,
  Loading,
  Sidebar,
} from "parts";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchOrders, messageOrders, statusOrders } from "store/actions";

export default function Transactions() {
  const dispatch = useDispatch();
  const ORDERS = useSelector((state) => state.orders);

  const location = useLocation();
  const params =
    location?.search?.length > 0 &&
    location?.search
      ?.substring(1, location.search.length)
      ?.split("&")
      ?.reduce((acc, item) => {
        const [key, value] = item.split("=");
        acc[key] = value;
        return acc;
      }, {});

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(statusOrders("loading"));
    orders
      .all()
      .then((res) => dispatch(fetchOrders(res)))
      .catch((err) =>
        dispatch(messageOrders(err?.response?.data?.message ?? "error"))
      );
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="px-4 md:px-16 pb-4">
          {ORDERS.status === "loading" && <Loading />}
          {ORDERS.status === "error" && ORDERS.message}
          {ORDERS.status === "ok" &&
            (params?.order_id ? (
              <Congratulations data={ORDERS.data[params?.order_id]} />
            ) : ORDERS.total > 0 ? (
              <>
                <section className="flex flex-col pl-12 md:pl-0 mt-8">
                  <h1 className="text-4xl text-gray-900 font-medium">
                    Transactions
                  </h1>
                  <p className="text-lg text-gray-600">
                    Keep on tract what you've invested
                  </p>
                </section>
                <section className="flex flex-col mt-8">
                  {Object.values(ORDERS.data)?.map?.((item, index) => (
                    <ListOrdersItem data={item} key={index} />
                  ))}
                </section>
              </>
            ) : (
              <Empty />
            ))}
        </div>
      </div>
    </div>
  );
}
