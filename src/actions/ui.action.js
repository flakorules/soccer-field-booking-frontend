import { types } from "../types/types";

export const setShowLoading = (flag) => ({
  type: types.setShowLoading,
  payload: flag,
});
