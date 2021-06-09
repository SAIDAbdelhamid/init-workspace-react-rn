import { UPDATE_FILTER } from "../store/types";

export const setFilterAction = (value) => ({
  type: UPDATE_FILTER,
  payload: value
})