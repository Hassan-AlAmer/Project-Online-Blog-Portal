import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import selectedBlogReducer from "./selectedBlogReducer";

export default combineReducers({
  blogs: blogReducer,
  selectedblog: selectedBlogReducer
});
