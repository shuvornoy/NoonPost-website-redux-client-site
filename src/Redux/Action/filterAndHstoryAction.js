import { ADD_HISTORY, FRIST_UPLOAD, LAST_UPLOAD } from "../Constants/Constants";

// history
export const addHistory = (data) => {
  return {
    type: ADD_HISTORY,
    payload: data,
  };
};
// filter
export const fristUpLoad = () => {
  return {
    type: FRIST_UPLOAD,
  };
};

export const lastUpLoad = () => {
  return {
    type: LAST_UPLOAD,
  };
};
