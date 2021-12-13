import { INCREMENT, DECREMENT } from "./ActionsTypes";

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};
export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
