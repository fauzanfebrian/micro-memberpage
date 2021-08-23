import { axios } from "configs";

const media = {
  upload: (image) => axios.post("/media", { image }),
};

export default media;
