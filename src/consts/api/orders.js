import { axios } from "configs";

const orders = {
  all: async (options = { params: {} }) => {
    const item = await axios.get("/orders", options);
    return item.data;
  },
};

export default orders;
