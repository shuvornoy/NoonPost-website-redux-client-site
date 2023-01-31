import { ADD_HISTORY } from "../Constants/Constants";

export const blogSort = (store) => (next) => (action) => {
  const { history } = store.getState().filterAndHistoryReducer;

  if (action.type === ADD_HISTORY) {
    const newAction = {
      ...action,
      payload: { ...action.payload, position: history.length },
    };
    return next(newAction);
  }

  return next(action);
};
