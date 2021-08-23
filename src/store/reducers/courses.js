import {
  FETCH_COURSES,
  MESSAGE_COURSE,
  STATUS_COURSES,
  WATCH_COURSE,
} from "consts";

const initialState = {
  data: [],
  total: 0,
  status: "idle",
  message: "",
};

export default function courses(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_COURSE:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };
    case WATCH_COURSE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            ...action.payload,
          },
        },
        status: "ok",
      };
    case FETCH_COURSES:
      return {
        ...state,
        data:
          action.payload?.reduce?.((acc, item) => {
            acc[item.course_id] = item;
            return acc;
          }, {}) ?? {},
        total: action?.payload?.length ?? 0,
        status: "ok",
      };
    case STATUS_COURSES:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
