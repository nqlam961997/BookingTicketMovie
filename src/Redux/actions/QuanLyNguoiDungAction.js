import Axios from "axios";
import { ACCESSTOKEN, USER_LOGIN, DOMAIN } from "../../Util/Config";
import { history } from "../../Util/history";
import {
  DANG_NHAP,
  DANG_KI,
  HANDLE_CHANGE_INPUT,
  LAY_THONG_TIN_USER,
} from "../const/QuanLyNguoiDungConst";
import swal from "sweetalert2";

export const dangNhapAction = async (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: DOMAIN + "/api/QuanLyNguoiDung/DangNhap?maNhom=GP07",
        method: "POST",
        data: userLogin,
      });
      console.log(result.data.maLoaiNguoiDung);
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      swal.fire("Thông báo", "Đăng nhập thành công!", "success");
      dispatch({
        type: DANG_NHAP,
        userLogin: userLogin,
      });
      if (result.data.maLoaiNguoiDung == "QuanTri") {
        history.push("/admin/quanlyphim");
      } else {
        history.push("/thongtintaikhoan/profile");
      }
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
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      swal.fire("Thông báo", "Đăng kí thành công!", "success");
      dispatch({
        type: DANG_KI,
        userLogin: register,
      });
      console.log(register);
      history.push("/");
    } catch (err) {
      swal.fire("Thông báo", "Đăng kí thất bại!", "error");
      console.log(err.response.status);
    }
  };
};

export const layThongTinTaiKhoanActionApi = async (taiKhoan) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: DOMAIN + "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: taiKhoan,
      });
      dispatch({
        type: LAY_THONG_TIN_USER,
        thongTinUser: data,
      });
    } catch (err) {
      swal.fire("Thông báo", "Lấy thông tin không thành công", "error");
    }
  };
};

export const capNhatUser = async (user) => {
  console.log(user);
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: DOMAIN + "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
        data: user,
      });
      swal.fire("Thông báo", "Cập nhật thành công!", "success");
    } catch (err) {
      console.log(err.response.data);
      swal.fire("Thông báo", "Cập nhật không thành công", "error");
    }
  };
};
