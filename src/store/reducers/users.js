import { POPULATE_PROFILE } from "consts";

const initialState = null;

const users = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default users;
