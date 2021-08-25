import { FETCH_ORDERS, MESSAGE_ORDER, STATUS_ORDERS } from "consts";

export const fetchOrders = (fetch) => ({
  type: FETCH_ORDERS,
  payload: fetch,
});
export const messageOrders = (message) => ({
  type: MESSAGE_ORDER,
  payload: message,
});
export const statusOrders = (status) => ({
  type: STATUS_ORDERS,
  payload: status,
});
