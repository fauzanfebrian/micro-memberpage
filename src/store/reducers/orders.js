import { FETCH_ORDERS, MESSAGE_ORDER, STATUS_ORDERS } from "consts";

const initialState = {
  data: [],
  total: 0,
  status: "idle",
  message: "",
};

export default function courses(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_ORDER:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };
    case FETCH_ORDERS:
      return {
        ...state,
        data:
          action.payload?.reduce?.((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {}) ?? {},
        total: action?.payload?.length ?? 0,
        status: "ok",
      };
    case STATUS_ORDERS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
