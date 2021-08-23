import {
  FETCH_COURSES,
  MESSAGE_COURSE,
  STATUS_COURSES,
  WATCH_COURSE,
} from "consts";

export const fetchCourses = (fetch) => ({
  type: FETCH_COURSES,
  payload: fetch,
});
export const messageCourses = (message) => ({
  type: MESSAGE_COURSE,
  payload: message,
});
export const statusCourses = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});
export const watchCourse = (watch) => ({
  type: WATCH_COURSE,
  payload: watch,
});
