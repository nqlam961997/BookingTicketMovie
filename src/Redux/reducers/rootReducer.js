import { combineReducers } from "redux";
import {QuanLyNguoiDungReducer} from "./QuanLyNguoiDungReducer";
import {QuanLyPhimReducer} from './QuanLyPhimReducer';

export const rootReducer = combineReducers({
    QuanLyNguoiDungReducer,
    QuanLyPhimReducer
});
