import { combineReducers } from "redux";
import { QuanLyPhimAdminReducer } from "./AdminReducer/QuanLyPhimAdminReducer";
import { QuanLyNguoiDungAdminReducer } from "./AdminReducer/QuanLyNguoiDungAdminReducer";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";

export const rootReducer = combineReducers({
  QuanLyPhimAdminReducer,
  QuanLyNguoiDungAdminReducer,
  QuanLyNguoiDungReducer,
});
