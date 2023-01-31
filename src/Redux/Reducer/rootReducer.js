import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";
import { filterAndHistoryReducer } from "./filterAndHistoryReducer";

export const rootReducer = combineReducers({
  blogsReducer,
  filterAndHistoryReducer,
});
