import { axios } from "configs";

const courses = {
  all: async (options = { params: { status: "published" } }) => {
    const item = await axios.get("/courses", options);
    return item.data;
  },
  detail: (id) => axios.get(`/courses/${id}`).then((item) => item.data),
  join: (id) => axios.post("/my-courses", { course_id: id }),
  mine: () => axios.get("/my-courses"),
};

export default courses;
