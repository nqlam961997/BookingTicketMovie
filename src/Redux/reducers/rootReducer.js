import { combineReducers } from "redux";
import { QuanLyPhimReducer } from "./AdminReducer/QuanLyPhimReducer";
import { QuanLyNguoiDungReducer } from "./AdminReducer/QuanLyNguoiDungReducer";

export const rootReducer = combineReducers({
  QuanLyPhimReducer,
  QuanLyNguoiDungReducer,
});
