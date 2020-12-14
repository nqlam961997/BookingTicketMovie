import Axios from "axios";
import { ACCESSTOKEN, USER_LOGIN, DOMAIN } from "../../Util/Config";
import { history } from "../../Util/history";
import {
  DANG_NHAP,
  DANG_KI,
  HANDLE_CHANGE_INPUT,
} from "../const/QuanLyNguoiDungConst";
import swal from "sweetalert2";

export const dangNhapAction = async (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: DOMAIN + "/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });
      console.log(result.data);
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      dispatch({
        type: DANG_NHAP,
        userLogin: userLogin,
      });
      swal.fire("Thông báo", "Đăng nhập thành công!", "success");
      history.push("/thongtintaikhoan");
    } catch (err) {
      swal.fire("Thông báo", "Đăng nhập thất bại!", "error");
      console.log(err);
    }
  };
};

export const dangKiAction = async (register) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: DOMAIN + "/api/quanlynguoidung/dangky",
        method: "POST",
        data: register,
      });
      console.log(result.data);
      swal.fire("Thông báo", "Đăng kí thành công!", "success");
      dispatch({
        type: DANG_KI,
        userLogin: register,
      });
      console.log(register);
      history.push("/");
    } catch (err) {
      swal.fire("Thông báo", "Đăng kí thất bại!", "error");
      console.log(err);
    }
  };
};
