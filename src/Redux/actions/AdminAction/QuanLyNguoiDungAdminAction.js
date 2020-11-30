import Axios from "axios";
import noti from "sweetalert2";
import { ACCESSTOKEN, DOMAIN } from "../../../Util/Config";
import { history } from "../../../Util/history";
import {
  LAY_DANH_SACH_NGUOI_DUNG,
  LAY_THONG_TIN_NGUOI_DUNG,
} from "../../const/AdminConst/QuanLyNguoiDungAdminConst";

export const layDanhSachNguoiDungApiAction = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_DANH_SACH_NGUOI_DUNG,
          dsNguoiDung: data,
        });
      }
    } catch (err) {
      noti.fire("Thông báo", err.data, "error");
    }
  };
};

export const themNguoiDungAdminApiAction = (thongTin) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: DOMAIN + "/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: thongTin,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      noti.fire("Thông báo", "Thêm người dùng thành công", "success");
      history.push("/admin/quanlynguoidung");
    } catch (err) {
      console.log(err.response);
      noti.fire("Thông báo", "Thêm người dùng không thành công", "error");
    }
  };
};

export const xoaNguoiDung = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      noti.fire("Thông báo", "Xóa người dùng không thành công", "success");
    } catch (err) {
      noti.fire("Thông báo", "Xóa người dùng không thành công", "error");
    }
  };
};

export const layThongTinNguoiDung = (thongTin) => {
  console.log("thong tin lay vao ->", thongTin);
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: DOMAIN + `/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: "POST",
        data: thongTin,
      });
      if (result.status === 200) {
        dispatch({
          type: LAY_THONG_TIN_NGUOI_DUNG,
          thongTinUser: result.data,
        });
      }
      console.log("data lay ra action ->", result.data);
    } catch (err) {
      console.log(err.response.data);
      noti.fire("Thông báo", "Lấy thông tin không thành công", "error");
    }
  };
};
