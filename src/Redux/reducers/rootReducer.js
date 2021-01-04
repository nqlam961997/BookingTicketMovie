import { combineReducers } from "redux";
import { QuanLyPhimAdminReducer } from "./AdminReducer/QuanLyPhimAdminReducer";
import { QuanLyNguoiDungAdminReducer } from "./AdminReducer/QuanLyNguoiDungAdminReducer";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";

export const rootReducer = combineReducers({
  QuanLyPhimAdminReducer,
  QuanLyNguoiDungAdminReducer,
  QuanLyNguoiDungReducer,
  QuanLyPhimReducer,
});
