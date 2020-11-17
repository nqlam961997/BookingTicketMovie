import { combineReducers } from "redux";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";
import { QuanLyPhimAdminReducer } from "./AdminReducer/QuanLyPhimAdminReducer";
import { QuanLyNguoiDungAdminReducer } from "./AdminReducer/QuanLyNguoiDungAdminReducer";

export const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyPhimAdminReducer,
  QuanLyNguoiDungAdminReducer,
});
