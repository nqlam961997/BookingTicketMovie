import Axios from "axios";
import {
  LAY_DANH_SACH_PHIM,
  LAY_THONG_TIN_PHIM,
  THEM_PHIM_MOI,
  XOA_PHIM,
} from "../../constants/AdminConst/QuanLyPhimConst";
import noti from "sweetalert2";

export const layDanhSachPhimApiAction = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
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
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
        method: "POST",
        data: thongTin,
      });
      if (status === 200) {
        dispatch({
          type: THEM_PHIM_MOI,
        });
        noti.fire("Thông báo", "Thêm phim thành công", "success");
      }
    } catch (e) {
      noti.fire("Thông báo", "Thêm phim không thành công", "error");
    }
  };
};

export const layThongTinPhimApiAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}?maNhon=GP07`,
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
  return async (dispatch) => {
    try {
      let status = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
        method: "POST",
      });
      if (status === 200) {
        noti.fire("Thông báo", "Cập nhật phim thành công", "success");
      }
    } catch (e) {
      noti.fire("Thông báo", "Cập nhật phim thất bại", "error");
    }
  };
};

export const xoaPhimApiAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let { status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
      });
      if (status === 200) {
        dispatch({
          type: XOA_PHIM,
        });
      }
      noti.fire("Thông báo", "Xóa phim thành công", "success");
    } catch (err) {
      noti.fire("Thông báo", "Xóa phim không thành công", "error");
    }
  };
};
