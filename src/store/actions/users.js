import { POPULATE_PROFILE } from "consts";

export const populateProfile = (profile = {}) => ({
  type: POPULATE_PROFILE,
  payload: profile,
});
