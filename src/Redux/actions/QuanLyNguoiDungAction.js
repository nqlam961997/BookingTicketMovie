import Axios from "axios";
import { ACCESSTOKEN, USER_LOGIN, DOMAIN } from "../../Util/Config";
import { history } from "../../Util/history";
import { DANG_NHAP, DANG_KI } from "../const/QuanLyNguoiDungConst";
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
      swal.fire("Thông báo", "Đăng nhập thành công!", "success");
      dispatch({
        type: DANG_NHAP,
        userLogin: userLogin,
      });
      history.push("/");
    } catch (err) {
      swal.fire("Thông báo", "Đăng nhập thất bại!", "error");
      console.log(err);
    }
  };
};
