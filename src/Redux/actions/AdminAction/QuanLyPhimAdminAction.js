import Axios from "axios";
import {
  LAY_DANH_SACH_PHIM,
  LAY_THONG_TIN_PHIM,
  THEM_PHIM_MOI,
  XOA_PHIM,
} from "../../const/AdminConst/QuanLyPhimAdminConst";
import noti from "sweetalert2";
import { ACCESSTOKEN, DOMAIN } from "../../../Util/Config";
import { history } from "../../../Util/history";

export const layDanhSachPhimApiAction = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: DOMAIN + "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_DANH_SACH_PHIM,
          dsPhim: data,
        });
      }
    } catch (err) {
      console.log(err.data);
    }
  };
};

export const themPhimMoiApiAction = (thongTin) => {
  return async (dispatch) => {
    try {
      let { status } = await Axios({
        url: DOMAIN + "/api/QuanLyPhim/ThemPhimUploadHinh",
        method: "POST",
        data: thongTin,
      });
      if (status === 200) {
        dispatch({
          type: THEM_PHIM_MOI,
        });
        noti.fire("Thông báo", "Thêm phim thành công", "success");
        history.push("/admin/quanlyphim");
      }
    } catch (e) {
      noti.fire("Thông báo", "Thêm phim không thành công", "error");
    }
  };
};

export const layThongTinPhimAdminApiAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: DOMAIN + `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_THONG_TIN_PHIM,
          thongTinPhim: data,
        });
      }
    } catch (err) {
      noti.fire("Thông báo", err.data, "error");
    }
  };
};

export const updatePhimApiAction = (thongTin) => {
  console.log(typeof thongTin.get("hinhAnh"));
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
        data: thongTin,
      });
      noti.fire("Thông báo", "Cập nhật phim thành công", "success");
      history.push("/admin/quanlyphim");
    } catch (e) {
      noti.fire("Thông báo", "Cập nhật phim thất bại", "error");
      console.log(e.response);
    }
  };
};

export const xoaPhimApiAction = (maPhim) => {
  return (dispatch) => {
    try {
      let { status } = Axios({
        url: DOMAIN + `/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      noti.fire("Thông báo", "Xóa phim thành công", "success");
    } catch (err) {
      noti.fire("Thông báo", "Xóa phim không thành công", "error");
    }
  };
};
