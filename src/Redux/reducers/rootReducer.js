import { combineReducers } from "redux";
import { QuanLyPhimAdminReducer } from "./AdminReducer/QuanLyPhimAdminReducer";
import { QuanLyNguoiDungAdminReducer } from "./AdminReducer/QuanLyNguoiDungAdminReducer";

export const rootReducer = combineReducers({
  QuanLyPhimAdminReducer,
  QuanLyNguoiDungAdminReducer,
});
